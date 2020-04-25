// TODO tests

export function ValidateFields(
  fields: { [k: string]: string },
  validators: { [k: string]: (arg0: string) => void }
): boolean | { [k: string]: string | boolean } {
  let thrown: boolean = false
  const result: { [k: string]: string | boolean } = {}

  for (const [field, validator] of Object.entries(validators)) {
    const value = fields[field]

    try {
      validator && validator(value)
    } catch (e) {
      thrown = true
      result[field] = e.message || true
    }
  }

  return thrown && result
}
