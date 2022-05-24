
fn main() {
    use rome_formatter::prelude::*;
    use rome_formatter::Formatted;
    let element = format_elements![token("let"),space_token(),group_elements(group_elements(format_elements![token("a"),space_token(),token("="),space_token(),token("3")])),token(";"),hard_line_break()];
    println!(
        "{}",
        Formatted::new(element, PrinterOptions::default())
            .print()
            .as_code()
    );
}
  