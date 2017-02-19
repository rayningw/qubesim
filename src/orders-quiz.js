//@flow

import P from 'bluebird';

import { describeOrder, recurringOrders } from "./orders";

import { addBorder } from "./docket";
import { question, println } from "./io";
import { selectUniform } from "./selectors";

export function quizRecurringOrders() {
  return quizOneRecurringOrder().then(askForNext);
}

function askForNext() {
  return question(`
Show a random customer order?
y) Yes
*) No
Please respond: `).then(answer => {
    switch (answer.trim()) {
      case 'y':
        return quizOneRecurringOrder().then(askForNext);
      default:
        return Promise.resolve();
    }
  });
}

function quizOneRecurringOrder() {
  const order = selectUniform(recurringOrders);
  return question(`
What does ${order.customer} usually order?
Press enter to reveal ...`).then(() => {
    println(addBorder(describeOrder(order)));
  });
}
