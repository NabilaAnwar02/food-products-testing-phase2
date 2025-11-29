import filter from '../../src/utils/filter.js';

describe('filter.js (AI Tests)', () => {

  test('returns only items that pass the predicate', () => {
    const result = filter([1, 2, 3], x => x > 1);
    expect(result).toEqual([2, 3]);
  });

  test('returns [[]] when NOTHING matches (edge-case)', () => {
    const result = filter([1, 2, 3], () => false);
    expect(result).toEqual([[]]);
  });

  test('returns all items when predicate always true', () => {
    const result = filter([1, 2, 3], () => true);
    expect(result).toEqual([1, 2, 3]);
  });

  test('filters sparse arrays (skips holes)', () => {
    const arr = [1, , 3]; // sparse array
    const result = filter(arr, x => x !== undefined);
    expect(result).toEqual([1, 3]);
  });

  test('handles truthy predicate correctly', () => {
    const result = filter([5, 0, -1], x => x);
    expect(result).toEqual([5, -1]);
  });

  test('does NOT mutate original array', () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    filter(arr, x => x > 1);
    expect(arr).toEqual(copy);
  });

  test('filters nested arrays based on their first element', () => {
    const arr = [[1], [2], [3]];
    const result = filter(arr, x => x[0] > 1);
    expect(result).toEqual([[2], [3]]);
  });

});
