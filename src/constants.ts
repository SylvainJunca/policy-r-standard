export enum STATE {
  S0 = 0,
  S1 = 1,
  S2 = 2,
}
export const ALPHABET: string[] = ['0', '1'];

export const TRANSTABLE: { [key in STATE]: { [key: string]: STATE } } = {
  [STATE.S0]: { 0: STATE.S0, 1: STATE.S1 },
  [STATE.S1]: { 0: STATE.S2, 1: STATE.S0 },
  [STATE.S2]: { 0: STATE.S1, 1: STATE.S2 },
};
