/**
 *
 * @param {import('web-tree-sitter').Tree} tree
 * @param {string} source
 */
export function generate(tree, source) {
  let node = tree.rootNode;
  // get first node of root
  let firstChild = node.namedChild(0);
  let kind = firstChild.type;
  let formatElement = "";
  if (kind === "list") {
    formatElement = generateList(firstChild, source);
  } else if (kind === "call") {
    formatElement = generateCall(firstChild, source);
  } else if (kind === "ident") {
    formatElement = generateIdent(firstChild.text);
  } else {
    throw new Error(kind);
  }
  const finalSource = `
fn main() {
    use rome_formatter::prelude::*;
    use rome_formatter::Formatted;
    let element = ${formatElement};
    println!(
        "{}",
        Formatted::new(element, PrinterOptions::default())
            .print()
            .as_code()
    );
}
  `;
  return finalSource;
}
/**
 * @param{import('web-tree-sitter').SyntaxNode} node
 * @param {string} source
 */
function generateList(node, source) {
  let childCount = node.namedChildCount;
  let childContent = [];
  for (let i = 0; i < childCount; i++) {
    let child = node.namedChild(i);
    let content = "";
    let type = child.type;
    if (type === "ident") {
      content = generateIdent(child.text);
    } else if (type === "list") {
      content = generateList(child, source);
    } else if (type === "call") {
      content = generateCall(child, source);
    } else {
      throw new Error(type);
    }
    childContent.push(content);
  }
  // let wrap_string = format!("format_elements![{}]", child_content.join(","));
  return `format_elements![${childContent.join(",")}]`;
}

/**
 *
 * @param {string} ident
 */
function generateIdent(ident) {
  switch (ident) {
    case "Hard":
      return "hard_line_break()";
    case "Space":
      return "space_token()";
    default:
      throw new Error(ident);
  }
}
/**
 *
 * @param {import('web-tree-sitter').SyntaxNode} node
 * @param {string} source
 */
function generateCall(node, source) {
  let nodeContent = node.text;
  if (nodeContent === `Line(Soft)`) {
    return "soft_line_break()";
  } else if (nodeContent === `Line(Hard)`) {
    return "hard_line_break()";
  } else if (nodeContent === `Line(Empty)`) {
    return "empty_line()";
  }

  let nameNode = node.namedChild(0);
  let name = nameNode.text;
  let callName = generateCallName(name);

  let arg = node.namedChild(1);
  let generatedArgument = "";
  switch (arg.type) {
    case "list": {
      generatedArgument = generateList(arg, source);
      break;
    }
    case "call": {
      generatedArgument = generateCall(arg, source);
      break;
    }
    case "ident": {
      generatedArgument = generateIdent(arg, source);
      break;
    }
    case "string_literal": {
      generatedArgument = JSON.stringify(arg.text.slice(1, -1));
      // console.log()
      break;
    }
    default:
      throw new Error(`unknown arg kind: ${arg.type}`);
  }
  return `${callName}(${generatedArgument})`;
}

/**
 *
 * @param {string} name
 */
function generateCallName(name) {
  switch (name) {
    case "HardGroup":
      return "hard_group_elements";
    case "SyntaxTokenSlice":
      return "token";
    case "Group":
      return "group_elements";
    case "Indent":
      return "indent";
    default:
      throw new Error(`can't generate call expression for name: ${name}"`);
  }
}

// fn get_content_of_node(node: Node, source: &str) -> String {
//     node.utf8_text(source.as_bytes()).unwrap().to_string()
// }
