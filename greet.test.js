
const greet = require('./greet');

test('greets the user with their name', () => {
  expect(greet('Jenkins')).toBe('Hello, Jenkins!');
});
