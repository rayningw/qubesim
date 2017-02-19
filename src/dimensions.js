//@flow

export type Dimension = {
  name: string,
  options: Array<string>,
  defaultOption?: string,
}

export const dimensions: Array<Dimension> = [
  {
    name: 'recipe',
    options: [
      'latte', 'flat white', 'cappuccino', 'mocha', 'long black', 'macchiato', 'piccolo', 'espresso',
      'babycinno',
    ],
  },
  {
    name: 'size',
    options: [
      'regular', 'large',
    ],
    defaultOption: 'regular',
  },
  {
    name: 'strength',
    options: [
      'regular', 'weak', 'strong',
    ],
    defaultOption: 'regular',
  },
  {
    name: 'bean',
    options: [
      'house', 'decaf', 'guest bean',
    ],
    defaultOption: 'house',
  },
  {
    name: 'sweetener',
    options: [
      'none', '1 sugar', '2 sugars', '3 sugars', '1 equal', '3 splendours',
    ],
    defaultOption: 'none',
  },
  {
    name: 'milk',
    options: [
      'whole', 'skinny', 'soy', 'almond',
    ],
    defaultOption: 'whole',
  },
  // Additional dash of milk
  {
    name: 'dashmilk',
    options: [
      'none', 'dash of milk',
    ],
    defaultOption: 'none',
  },
  {
    name: 'service',
    options: [
      'takeaway', 'dine in',
    ],
    defaultOption: 'takeaway',
  },
  {
    name: 'temperature',
    options: [
      'warm', 'hot', 'on ice',
    ],
    defaultOption: 'warm',
  },
];
