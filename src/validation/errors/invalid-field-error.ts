export class InvalidFieldError extends Error {
  constructor (fieldLabel: string) {
    super(`${fieldLabel} invalido`)
  }
}
