import modThree from '../src/modThree';

describe('modThree', () => {
  it('should return 1 for input "1101"', () => {
    expect(modThree('1101')).toBe(1);
  });

  it('should return 0 for input "1110"', () => {
    expect(modThree('1110')).toBe(2);
  });

  it('should return 1 for input "1111"', () => {
    expect(modThree('1111')).toBe(0);
  });

  it('should be able to process a really long string', () => {
    expect(
      modThree(
        '111110101010101010010101010101010101010101010101010101010101010101010101010101010101010100111110101011001010101010101010101010101010101010101010101010101111101010101010101010',
      ),
    ).toBe(1);
  });

  it('should throw an error for invalid input', () => {
    expect(() => modThree('1123')).toThrow();
  });

  it('should throw an error for empty input', () => {
    expect(() => modThree('')).toThrow();
  });
});
