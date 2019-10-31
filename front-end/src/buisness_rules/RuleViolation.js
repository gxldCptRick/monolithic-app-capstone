export default function violation(message) {
  return { success: message === undefined, message };
}
