//@flow

import P from 'bluebird';

import { dimensions } from "./dimensions";
import type { Dimension } from "./dimensions";

import { generateDrinks, describeDrink } from "./drinks";
import type { Drink } from "./drinks";

import { addBorder } from "./docket";

import { quizRecurringOrders } from "./orders-quiz";

import { question, println } from "./io";
import log from "./log";

println("qubesim");
showMenu().then(() => {
  println("Farewell");
});

function showMenu() {
  return question(`
What do you want to do?
1) Generate random drinks.
2) Quiz on recurring orders.
*) Quit.
Please respond: `).then(answer => {
    switch (answer.trim()) {
      case '1':
        return askForNumberOfDrinks().then(generateDrinks).then(printDrinks).then(showMenu);
      case '2':
        return quizRecurringOrders().then(showMenu);
      default:
        return P.resolve();
    }
  });
}

function printDrinks(drinks: Array<Drink>) {
  drinks.forEach(drink => {
    println("==========");
    println(addBorder(describeDrink(drink)));
  });
}

function askForNumberOfDrinks() {
  return question("How many drinks? ").then(answer => {
    try {
      return parseInt(answer);
    } catch(e) {
      console.log("Sorry, that is not a number");
      return Promise.reject(new Error("Could not parse answer"));
    }
  });
}
