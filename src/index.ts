import { modThree } from "./modThree";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
    rl.question("Enter a binary number (or 'quit' to exit): ", (answer) => {
      if (answer.toLowerCase() === 'quit') {
        console.log("Goodbye, have an amazing day! :)")
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

  askQuestion();
