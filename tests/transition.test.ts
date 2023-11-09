import { STATE, TRANSTABLE } from '../src/constants';
import transition from '../src/transition';

describe('transition', () => {
  it('should transition correctly from STATE S0', () => {
    expect(transition(STATE.S0, '0', TRANSTABLE)).toBe(STATE.S0);
    expect(transition(STATE.S0, '1', TRANSTABLE)).toBe(STATE.S1);
  });

  it('should transition correctly from STATE S1', () => {
    expect(transition(STATE.S1, '0', TRANSTABLE)).toBe(STATE.S2);
    expect(transition(STATE.S1, '1', TRANSTABLE)).toBe(STATE.S0);
  });

  it('should transition correctly from STATE S2', () => {
    expect(transition(STATE.S2, '0', TRANSTABLE)).toBe(STATE.S1);
    expect(transition(STATE.S2, '1', TRANSTABLE)).toBe(STATE.S2);
  });

  it('throws an error for invalid state', () => {
    expect(() => transition(3 as STATE, '0', TRANSTABLE)).toThrow(
      'Invalid STATE or input: state=3, input=0',
    );
    expect(() => transition(undefined as any, '0', TRANSTABLE)).toThrow();
  });

  it('throws an error for invalid input', () => {
    expect(() => transition(STATE.S0, '2', TRANSTABLE)).toThrow(
      `Invalid STATE or input: state=${STATE.S0}, input=2`,
    );
    expect(() => transition(STATE.S1, 'a', TRANSTABLE)).toThrow(
      `Invalid STATE or input: state=${STATE.S1}, input=a`,
    );
    expect(() => transition(STATE.S2, '', TRANSTABLE)).toThrow(
      `Invalid STATE or input: state=${STATE.S2}, input=`,
    );
  });

  it('handles custom different transition table', () => {
    const customTable = {
      [STATE.S0]: { 0: STATE.S1, 1: STATE.S2 },
      [STATE.S1]: { 0: STATE.S2, 1: STATE.S0 },
      [STATE.S2]: { 0: STATE.S0, 1: STATE.S1 },
    };
    expect(transition(STATE.S0, '0', customTable)).toBe(STATE.S1);
  });

  it('handles custom different state and transition table', () => {
    const customState = {
      A: 10,
      B: 20,
      C: 30,
      D: 40,
    };
    const customTable = {
      [customState.A]: { 0: customState.B, 1: customState.C },
      [customState.B]: { 0: customState.C, 1: customState.D },
      [customState.C]: { 0: customState.D, 1: customState.A },
      [customState.D]: { 0: customState.A, 1: customState.B },
    };
    expect(transition(customState.B, '0', customTable)).toBe(customState.C);
  });
});
