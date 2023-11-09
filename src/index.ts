enum State {
  S0 = 0,
  S1 = 1,
  S2 = 2,
}

function transition(state: State, input: string): State {
  const transTable: { [key in State]: { [key: string]: State } } = {
    [State.S0]: { "0": State.S0, "1": State.S1 },
    [State.S1]: { "0": State.S2, "1": State.S0 },
    [State.S2]: { "0": State.S1, "1": State.S2 },
  };
  return transTable[state][input];
}

function modThree(input: string): number {
  let currentState: State = State.S0;
  for (let i = 0; i < input.length; i++) {
    currentState = transition(currentState, input[i]);
  }
  return currentState;
}

console.log(modThree("1101"));
console.log(modThree("1110"));
console.log(modThree("1111"));
