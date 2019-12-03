import { prepare, run } from "./";

beforeAll(() => {
  document.body.innerHTML = `<h1>hello</h1>`;
});

test("prepare", () => {
  expect(prepare({ test: 1 })).toMatchSnapshot();
});

test("run", () => {
  expect(run()).toMatchSnapshot();
});
