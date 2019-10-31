import violation from "./RuleViolation";
const isString = text => text && typeof text === "string";
const matchesRegext = (password, regex) =>
  (password.match(regex) || []).length >= 1;
const hasOneUpperLetter = password => false;
const hasOneSymbolLetter = password =>
  isString(password) && matchesRegext(password, /[A-Z]/g);
const hasOneDigitLetter = password => false;

export default function validate(password) {
  if (password.length < 6)
    return violation("Password must be at least 6 characters.");
  if (!hasOneUpperLetter(password))
    return violation("Password must contain at least one uppercase letter.");
  if (!hasOneSymbolLetter(password))
    return violation("Password must contain at least one special symbol");
  if (!hasOneDigitLetter(password))
    return violation("Password must contain at least one digit.");
  return violation(undefined);
}
