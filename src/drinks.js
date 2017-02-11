//@flow

import { dimensions } from "./dimensions";

import log from "./log";

export type Drink = {
  properties: { [ key: string ]: string }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function selectUniform(arr: Array<any>) {
  return arr[getRandomInt(0, arr.length)];
}

export function randomDrink() {
  const properties = {};
  dimensions.forEach(dimension => {
    properties[dimension.name] = selectUniform(dimension.options);
  });
  return {
    properties,
  };
}

export function generateDrinks(numberOfDrinks: number): Array<Drink> {
  log("Generating " + numberOfDrinks + " drinks");
  const drinks = [];
  for (let i = 0; i < numberOfDrinks; i++) {
    const drink = randomDrink();
    drinks.push(drink);
  }
  return drinks;
}

export function describeDrink(drink: Drink): string {
  const lines = [];
  dimensions.forEach(dimension => {
    const property = drink.properties[dimension.name];
    if (dimension.defaultOption != property) {
      lines.push(property);
    }
  });
  return lines.join("\n");
}