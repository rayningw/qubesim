//@flow

import P from 'bluebird';
import Readline from 'readline';

import type { Dimension } from "./dimensions";

console.log("qubesim");

askForNumberOfDrinks().then(numberOfDrinks => {
  console.log("Generating " + numberOfDrinks + " drinks");
});

function askForNumberOfDrinks() {
  const readline = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new P((resolve, reject) => {
    readline.question("How many drinks? ", answer => {
      try {
        resolve(parseInt(answer));
      } catch(e) {
        console.log("Sorry, that is not a number");
        reject(new Error("Could not parse answer"));
      }
      readline.close();
    });
  });
}
