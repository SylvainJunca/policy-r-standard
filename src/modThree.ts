export enum State {
  S0 = 0,
  S1 = 1,
  S2 = 2,
}
const alphabet: string[] = ["0", "1"];

export function validateInput(input: string, alphabet: string[]): void {
  const regex = new RegExp(`^[${alphabet.join("")}]+$`);
  if (!regex.test(input)) {
    throw new Error(`Input must only contain ${alphabet.join(", ")}`);
  }
}

export function transition(state: State, input: string): State {
  const transTable: { [key in State]: { [key: string]: State } } = {
    [State.S0]: { "0": State.S0, "1": State.S1 },
    [State.S1]: { "0": State.S2, "1": State.S0 },
    [State.S2]: { "0": State.S1, "1": State.S2 },
  };
  if (!(state in transTable) || !(input in transTable[state])) {
    throw new Error(`Invalid state or input: state=${state}, input=${input}`);
  }
  return transTable[state][input];
}

export function modThree(input: string): number {
  validateInput(input, alphabet);
  let currentState: State = State.S0;
  for (let i = 0; i < input.length; i++) {
    currentState = transition(currentState, input[i]);
  }
  return currentState;
}