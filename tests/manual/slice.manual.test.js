import slice from '../../src/utils/slice.js';

describe('slice.js (Manual Tests)', () => {

  test('slices from a positive start index', () => {
    const result = slice([1, 2, 3, 4], 1);
    expect(result).toEqual([2, 3, 4]);
  });

  test('slices between start and end indexes', () => {
    const result = slice([1, 2, 3, 4], 1, 3);
    expect(result).toEqual([2, 3]);
  });

  test('negative start index works from the end', () => {
    const result = slice([1, 2, 3, 4], -2);
    expect(result).toEqual([3, 4]);
  });

  test('negative end index works from the end', () => {
    const result = slice([1, 2, 3, 4], 1, -1);
    expect(result).toEqual([2, 3]);
  });

  test('returns empty array when start > end', () => {
    const result = slice([1, 2, 3, 4], 3, 1);
    expect(result).toEqual([]);
  });

  test('null or undefined array returns empty array', () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3, 4];
    slice(arr, 1, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

});
