const generate = require('nanoid/generate');
jest.mock('nanoid/generate', () => {
  return jest.fn().mockImplementation(() => '123456');
});

import { prepare, run } from './';

beforeAll(() => {
  document.body.innerHTML = `<h1>hello</h1>`;
});

test('prepare', () => {
  expect(prepare({ test: 1 })).toMatchSnapshot();
});

test('run', () => {
  expect(run()).toMatchSnapshot();
});
