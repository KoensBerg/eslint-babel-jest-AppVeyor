import multNumbers from '../calc';

test('should use multNumbers', () => {
  const expected = 6;
  const received = multNumbers(2, 3);

  expect(received).toBe(expected);
});
