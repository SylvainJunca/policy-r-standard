import * as readline from 'readline';
import modThree from './modThree';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Asks the user to enter a binary number, then calculates and prints the modulo 3 of the number.
 * If the user enters 'quit', the function will stop asking for input and
 * close the readline interface.
 */

/* eslint-disable no-console */
export default function askQuestion() {
  rl.question("Enter a binary number (or 'quit' to exit): ", (answer) => {
    if (answer.toLowerCase() === 'quit') {
      console.log('Goodbye, have an amazing day! :)');
      rl.close();
    } else {
      try {
        const response = modThree(answer);
        console.log(`The modulo 3 of ${answer} is ${response}`);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error(e);
        }
      }
      askQuestion();
    }
  });
}
