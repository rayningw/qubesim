//@flow

import { describeDrink } from "./drinks";

const baseDrink = {
  properties: {
    recipe: 'latte',
    size: 'regular',
    strength: 'regular',
    bean: 'house',
    sweetener: 'none',
    'dine in / takeaway': 'takeaway',
    'warm / iced': 'warm',
  },
};

test("describeDrink", () => {
  expectDrinkToBeDescribedAs({}, `
latte`);

  expectDrinkToBeDescribedAs({
    recipe: 'flat white', size: 'large', strength: 'strong', bean: 'decaf', sweetener: '1 sugar',
    'dine in / takeaway': 'dine in', 'warm / iced': 'iced',
  }, `
flat white
large
strong
decaf
1 sugar
dine in
iced`);
});

function expectDrinkToBeDescribedAs(specializedProperties, desc) {
  const properties = Object.assign({}, baseDrink.properties, specializedProperties);
  const drink = {
    properties,
  };
  expect(describeDrink(drink)).toBe(desc.trim());
}
