export default function transition<T extends string | number>(
  state: T,
  input: string,
  transTable: { [key in T]: { [key: string]: T } },
): T {
  if (!(state in transTable) || !(input in transTable[state])) {
    throw new Error(`Invalid STATE or input: state=${state}, input=${input}`);
  }
  return transTable[state][input];
}
