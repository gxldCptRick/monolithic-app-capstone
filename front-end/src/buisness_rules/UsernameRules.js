import violation from "./RuleViolation";

export default function validate(username) {
  return username.length >= 6
    ? violation(undefined)
    : violation("Username must be at least 6 characters long.");
}
