import { prepare, run } from './';

beforeAll(() => {
  document.documentElement.innerHTML = `<html lang="en"><body></body></html>`;
});

test('prepare', () => {
  prepare({
    rules: [
      'div { color: red}',
      'body { background: blue }',
      '.test { font-family: serif}',
      '#header { margin: 10px}'
    ]
  });

  expect(document.documentElement.outerHTML).toMatchSnapshot();
});

test('run', () => {});
