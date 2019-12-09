import exec from './';

beforeAll(() => {
  document.documentElement.innerHTML = `<html><body></body></html>`;
});

test('exec', () => {
  exec();
  expect(document.documentElement.outerHTML).toMatchSnapshot();
});
