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
      'none', '1 sugar', '2 sugars', '3 sugars', '1 equal', '2 equal',
    ],
    defaultOption: 'none',
  },
  {
    name: 'dine in / takeaway',
    options: [
      'takeaway', 'dine in',
    ],
    defaultOption: 'takeaway',
  },
  {
    name: 'warm / iced',
    options: [
      'warm', 'on ice',
    ],
    defaultOption: 'warm',
  },
];
