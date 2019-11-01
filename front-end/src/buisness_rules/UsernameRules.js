import violation from "./RuleViolation";
import { isUniqueName } from "../ApiHandler";

export default async function validate(username) {
  return username.length >= 6 && (await isUniqueName(username))
    ? violation(undefined)
    : violation("Username must be at least 6 characters long.");
}
