export function validateFieldRequire(value: string) {
  const isValueEmpty = !value || value.trim() === ''

  if (isValueEmpty) {
    throw new Error()
  }
}
