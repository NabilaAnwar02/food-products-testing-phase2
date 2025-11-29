import reduce from '../../src/utils/reduce.js';

describe('reduce.js (Manual Tests)', () => {

  test('reduces an array of numbers with an initial accumulator', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).toBe(6);
  });

  test('reduces an array of numbers without initial accumulator', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).toBe(6);
  });

  test('returns initial accumulator when array is empty', () => {
    const result = reduce([], (acc, v) => acc + v, 10);
    expect(result).toBe(10);
  });

  test('reduces an object by summing its values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, (sum, val) => sum + val, 0);
    expect(result).toBe(6);
  });

  test('iteratee receives (accumulator, value, key, collection)', () => {
    const calls = [];
    const obj = { a: 1, b: 2 };

    reduce(obj, (acc, value, key, collection) => {
      calls.push({ acc, value, key, collection });
      return acc + value;
    }, 0);

    expect(calls.length).toBe(2);
    expect(calls[0]).toEqual({
      acc: 0,
      value: 1,
      key: 'a',
      collection: obj
    });
  });

});
