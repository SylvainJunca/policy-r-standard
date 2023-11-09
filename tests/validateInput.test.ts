import validateInput from '../src/validateInput';
import { ALPHABET } from '../src/constants';

describe('validateInput', () => {
  it('should not throw an error for valid input', () => {
    expect(() => validateInput('01', ALPHABET)).not.toThrow();
    expect(() => validateInput('00', ALPHABET)).not.toThrow();
    expect(() => validateInput('111001', ALPHABET)).not.toThrow();
  });

  it('should throw an error for invalid input', () => {
    expect(() => validateInput('02', ALPHABET)).toThrow();
    expect(() => validateInput('ab', ALPHABET)).toThrow();
    expect(() => validateInput('', ALPHABET)).toThrow();
    expect(() => validateInput(' ', ALPHABET)).toThrow();
    expect(() => validateInput([] as any, ALPHABET)).toThrow();
  });

  it('should work with a different alphabet', () => {
    const customAlphabet: string[] = ['a', 'b', 'c', '7'];
    expect(() => validateInput('ab', customAlphabet)).not.toThrow();
    expect(() => validateInput('c7', customAlphabet)).not.toThrow();
    expect(() => validateInput('ac7abcb7ccc', customAlphabet)).not.toThrow();

    expect(() => validateInput('02', customAlphabet)).toThrow();
    expect(() => validateInput('', customAlphabet)).toThrow();
    expect(() => validateInput(' ', customAlphabet)).toThrow();
    expect(() => validateInput([] as any, customAlphabet)).toThrow();
  });
});
