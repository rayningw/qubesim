//@flow

import { describeDrink, makeDrink } from "./drinks";
import type { Drink } from "./drinks";

export type Order = {
  customer?: string,
  drinks: Array<Drink>,
};

export function describeOrder(order: Order): string {
  const lines = []
  lines.push(`Customer: ${order.customer || '(unspecified)'}`);
  order.drinks.forEach((drink, idx) => {
    lines.push(`Drink ${idx+1}:`);
    lines.push(describeDrink(drink));
  });
  return lines.join("\n");
}

// Orders ordered regularly by customers
export const recurringOrders: Array<Order> = [
  {
    customer: "Richard",
    drinks: [
      makeDrink({
        recipe: 'flat white',
        size: 'large',
        sweetener: '2 sugars',
        service: 'takeaway',
        temperature: 'hot',
      }),
    ],
  },
  {
    customer: "Andrew",
    drinks: [
      makeDrink({
        recipe: 'piccolo',
      }),
      makeDrink({
        recipe: 'flat white',
        size: 'large',
      }),
    ],
  },
  {
    customer: "Mark",
    drinks: [
      makeDrink({
        recipe: 'mocha',
        size: 'large',
      }),
    ],
  },
  {
    customer: "Sophie",
    drinks: [
      makeDrink({
        recipe: 'latte',
        sweetener: '1 equal',
        milk: 'almond',
      }),
    ],
  },
  {
    customer: "Lady with black cup",
    drinks: [
      makeDrink({
        recipe: 'cappuccino',
        size: 'large',
      }),
    ],
  },
  {
    customer: "Lady with pink cup",
    drinks: [
      makeDrink({
        recipe: 'cappuccino',
        size: 'large',
        milk: 'skinny',
      }),
    ],
  },
  {
    customer: "Lady with elmo cup",
    drinks: [
      makeDrink({
        recipe: 'flat white',
        size: 'large',
        milk: 'skinny',
      }),
    ],
  },
  {
    customer: "Kevin",
    drinks: [
      makeDrink({
        recipe: 'flat white',
        size: 'large',
        sweetener: '1 sugar',
      }),
    ],
  },
  {
    customer: "David & Kane",
    drinks: [
      makeDrink({
        recipe: 'long black',
        size: 'large',
        sweetener: '3 splendours',
        dashmilk: 'dash of milk',
      }),
      makeDrink({
        recipe: 'cappuccino',
        size: 'large',
        sweetener: '1 sugar',
        temperature: 'hot',
      }),
    ],
  },
];
