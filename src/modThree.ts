import { ALPHABET, STATE, TRANSTABLE } from './constants';
import transition from './transition';
import validateInput from './validateInput';

export default function modThree(input: string): number {
  validateInput(input, ALPHABET);
  let currentState: STATE = STATE.S0;
  input.split('').forEach((char) => {
    currentState = transition(currentState, char, TRANSTABLE);
  });
  return currentState;
}
