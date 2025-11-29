import reduce from '../../src/utils/reduce.js';

describe('reduce.js (AI Tests)', () => {

  test('reduces nested arrays', () => {
    const result = reduce([[1], [2], [3]], (acc, val) => acc + val[0], 0);
    expect(result).toBe(6);
  });

  test('handles string concatenation', () => {
    const result = reduce(['a', 'b', 'c'], (acc, v) => acc + v, '');
    expect(result).toBe('abc');
  });

  test('uses first element as accumulator when initial value is missing', () => {
    const result = reduce(['x', 'y', 'z'], (acc, v) => acc + v);
    expect(result).toBe('xyz');
  });

  test('handles undefined values in arrays', () => {
    const arr = [1, undefined, 3];
    const result = reduce(arr, (acc, v) => acc + (v || 0), 0);
    expect(result).toBe(4);
  });

  test('handles empty object with initial accumulator', () => {
    const result = reduce({}, (acc, value) => acc + value, 50);
    expect(result).toBe(50);
  });

  test('object reduction does not depend on key order', () => {
    const obj = { c: 1, a: 2, b: 3 };
    const result = reduce(obj, (acc, v) => acc + v, 0);
    expect(result).toBe(6);
  });

  test('complex accumulator mutation', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (acc, value, key) => {
        acc[value] = acc[value] || [];
        acc[value].push(key);
        return acc;
      },
      {}
    );

    expect(result).toEqual({
      1: ['a', 'c'],
      2: ['b']
    });
  });

  test('iteratee receives correct arguments for arrays', () => {
    const calls = [];
    const arr = [10, 20];

    reduce(arr, (acc, val, index, coll) => {
      calls.push({ acc, val, index, coll });
      return acc + val;
    }, 0);

    expect(calls).toEqual([
      { acc: 0, val: 10, index: 0, coll: arr },
      { acc: 10, val: 20, index: 1, coll: arr }
    ]);
  });

});
