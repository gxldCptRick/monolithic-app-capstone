import violation from "./RuleViolation";

var formats =
  "(999)999-9999|999-999-9999|9999999999|+(999)999 ?- ?999|[+]9 (?999)? ?-? ?999 ? - ?9999";

const numberRegex = RegExp(
  "^(" + formats.replace(/([()])/g, "\\$1").replace(/9/g, "\\d") + ")$"
);
export default function validate(number) {
  return number && number.match(numberRegex)
    ? violation()
    : violation("Please enter a valid phone number (ex. 801-548-1575)");
}
