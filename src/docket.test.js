//@flow

import { addBorder } from "./docket";

test("addBorder", () => {
  expect(addBorder(`
hello :(
`.trim())).toBe(`
------------
| hello :( |
------------
`.trim());
});
