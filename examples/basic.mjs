import Parser from "web-tree-sitter";
import { generate } from "../src/index.mjs";

const { init } = Parser;
const source = `
List [
    HardGroup(
        List [
            SyntaxTokenSlice("switch"),
            Space,
            Group(
                List [
                    SyntaxTokenSlice("("),
                    Indent(
                        List [
                            Line(Soft),
                            SyntaxTokenSlice("\"test\""),
                        ],
                    ),
                    Line(Soft),
                    SyntaxTokenSlice(")"),
                ],
            ),
            Space,
            Group(
                List [
                    SyntaxTokenSlice("{"),
                    Indent(
                        List [
                            Line(Hard),
                            SyntaxTokenSlice("case"),
                            Space,
                            SyntaxTokenSlice("\"test\""),
                            SyntaxTokenSlice(":"),
                            Space,
                            SyntaxTokenSlice("{"),
                            Line(Hard),
                            SyntaxTokenSlice("}"),
                        ],
                    ),
                    Line(Hard),
                    SyntaxTokenSlice("}"),
                ],
            ),
        ],
    ),
    SyntaxTokenSlice(""),
    Line(Hard),
]

`;
(async () => {
  await init();
  const parser = new Parser();
  const Lang = await Parser.Language.load("assets/tree-sitter-rome_ir.wasm");
  parser.setLanguage(Lang);
  const tree = parser.parse(source, null);
  console.log(generate(tree, source));
})();
