function validateInput(input: string, alphabet: string[]): void {
  const regex = new RegExp(`^[${alphabet.join('')}]+$`);
  if (!regex.test(input)) {
    throw new Error(`Input must only contain ${alphabet.join(', ')}`);
  }
}

export default validateInput;
