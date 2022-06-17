import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValidation('Email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError('Email'))
  })
})
