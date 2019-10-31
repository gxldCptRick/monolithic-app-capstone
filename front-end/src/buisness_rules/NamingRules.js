import violation from "./RuleViolation";
export default function verify(name) {
  return name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
    ? violation(undefined)
    : violation("The name did not match the given format");
}
