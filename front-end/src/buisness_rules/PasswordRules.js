export class ValidationError extends Error {
  constructor(message = "The given input has failed validation rules.") {
    super(message);
  }
}

export function validatePassword({ password = "" }) {
  console.log("Checking length");
  if (password.length < 5)
    throw ValidationError("password must be longer than 5 characters");
  // apply password rules here
}
