import { transition, modThree } from '../src/modThree';
import { STATE } from '../src/constants';

describe('transition', () => {
  it('should transition correctly from STATE S0', () => {
    expect(transition(STATE.S0, '0')).toBe(STATE.S0);
    expect(transition(STATE.S0, '1')).toBe(STATE.S1);
  });

  it('should transition correctly from STATE S1', () => {
    expect(transition(STATE.S1, '0')).toBe(STATE.S2);
    expect(transition(STATE.S1, '1')).toBe(STATE.S0);
  });

  it('should transition correctly from STATE S2', () => {
    expect(transition(STATE.S2, '0')).toBe(STATE.S1);
    expect(transition(STATE.S2, '1')).toBe(STATE.S2);
  });

  it('should handle invalid input', () => {
    expect(() => transition(STATE.S0, '2')).toThrow();
    expect(() => transition(STATE.S1, 'a')).toThrow();
    expect(() => transition(STATE.S2, '')).toThrow();
  });

  it('should handle invalid STATE', () => {
    expect(() => transition(3 as STATE, '0')).toThrow();
  });
});

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

  it('should throw an error for invalid input', () => {
    expect(() => modThree('1123')).toThrow();
  });
});
