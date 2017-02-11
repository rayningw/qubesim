//@flow

import P from 'bluebird';
import Readline from 'readline';

import { dimensions } from "./dimensions";
import type { Dimension } from "./dimensions";

import { generateDrinks, describeDrink } from "./drinks";
import type { Drink } from "./drinks";

import log from "./log";

println("qubesim");

askForNumberOfDrinks().then(generateDrinks).then(printDrinks);

function printDrinks(drinks: Array<Drink>) {
  drinks.forEach(drink => {
    println("==========");
    println(describeDrink(drink));
  });
}

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

function println(str: string) {
  console.log(str);
}
