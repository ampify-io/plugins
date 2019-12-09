const generate = require('nanoid/generate');
jest.mock('nanoid/generate', () => {
  return jest.fn().mockImplementation(() => '123456');
});

import exec from './';

beforeAll(() => {
  document.documentElement.innerHTML = `<html><body></body></html>`;
});

test('exec', () => {
  exec();
  expect(document.documentElement.outerHTML).toMatchSnapshot();
});
