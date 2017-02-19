//@flow

import { describeDrink, makeDrink } from "./drinks";

test("describeDrink", () => {
  expectDrinkToBeDescribedAs({}, `
latte`);

  expectDrinkToBeDescribedAs({
    recipe: 'flat white', size: 'large', strength: 'strong', bean: 'decaf', sweetener: '1 sugar',
    service: 'dine in', temperature: 'iced',
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
  const drink = makeDrink(specializedProperties);
  expect(describeDrink(drink)).toBe(desc.trim());
}
