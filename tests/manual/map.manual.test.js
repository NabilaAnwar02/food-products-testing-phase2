import map from '../../src/utils/map.js';

describe('map.js (Manual Tests)', () => {

  test('maps values using a simple iteratee', () => {
    const result = map([1, 2, 3], x => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  test('iteratee receives (value, index, array)', () => {
    const calls = [];
    map(['a', 'b'], (value, index, array) => {
      calls.push([value, index, array]);
    });

    expect(calls.length).toBe(2);
    expect(calls[0]).toEqual(['a', 0, ['a', 'b']]);
    expect(calls[1]).toEqual(['b', 1, ['a', 'b']]);
  });

  test('handles empty array', () => {
    expect(map([], x => x)).toEqual([]);
  });

  test('returns empty array when input is null or undefined', () => {
    expect(map(null, x => x)).toEqual([]);
    expect(map(undefined, x => x)).toEqual([]);
  });

  test('handles array with undefined values', () => {
    const arr = [1, undefined, 3];
    const result = map(arr, x => (x === undefined ? 'missing' : x));
    expect(result).toEqual([1, 'missing', 3]);
  });

  test('does not modify original array', () => {
    const arr = [1, 2, 3];
    map(arr, x => x * 2);
    expect(arr).toEqual([1, 2, 3]);
  });

});
