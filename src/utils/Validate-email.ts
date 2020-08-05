export function validateEmail(value: string) {
  // Значение не может быть пустым
  if (!value || value.trim() === '') {
    throw new Error()
  }
  // Значение должно содержать символ @
  if (!/@/.test(value)) {
    throw new Error()
  }
}
