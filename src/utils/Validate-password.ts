export function validatePassword(value: string) {
  if (value.length < 6) {
    throw new Error()
  }
}
