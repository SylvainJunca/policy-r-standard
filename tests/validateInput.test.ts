import validateInput from '../src/validateInput';

describe('validateInput', () => {
  it('should not throw an error for valid input', () => {
    expect(() => validateInput('01', ['0', '1'])).not.toThrow();
    expect(() => validateInput('00', ['0', '1'])).not.toThrow();
    expect(() => validateInput('11', ['0', '1'])).not.toThrow();
  });

  it('should throw an error for invalid input', () => {
    expect(() => validateInput('02', ['0', '1'])).toThrow();
    expect(() => validateInput('ab', ['0', '1'])).toThrow();
    expect(() => validateInput('', ['0', '1'])).toThrow();
  });
});
