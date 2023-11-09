export enum STATE {
  S0 = 0,
  S1 = 1,
  S2 = 2,
}
const ALPHABET: string[] = ['0', '1'];

export function validateInput(input: string, alphabet: string[]): void {
  const regex = new RegExp(`^[${alphabet.join('')}]+$`);
  if (!regex.test(input)) {
    throw new Error(`Input must only contain ${alphabet.join(', ')}`);
  }
}

export function transition(state: STATE, input: string): STATE {
  const transTable: { [key in STATE]: { [key: string]: STATE } } = {
    [STATE.S0]: { 0: STATE.S0, 1: STATE.S1 },
    [STATE.S1]: { 0: STATE.S2, 1: STATE.S0 },
    [STATE.S2]: { 0: STATE.S1, 1: STATE.S2 },
  };
  if (!(state in transTable) || !(input in transTable[state])) {
    throw new Error(`Invalid STATE or input: STATE=${STATE}, input=${input}`);
  }
  return transTable[state][input];
}

export function modThree(input: string): number {
  validateInput(input, ALPHABET);
  let currentState: STATE = STATE.S0;
  input.split('').forEach((char) => {
    currentState = transition(currentState, char);
  });
  return currentState;
}
