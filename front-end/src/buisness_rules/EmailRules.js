import violation from "./RuleViolation";

export default function validate(email) {
  return email && email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ? violation()
    : violation("Please enter a valid email address (ex. demo@example.com)");
}
