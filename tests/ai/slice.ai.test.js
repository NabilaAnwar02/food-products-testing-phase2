import slice from '../../src/utils/slice.js';

describe('slice.js (AI Tests)', () => {

  test('handles full array slice by default', () => {
    const result = slice([10, 20, 30]);
    expect(result).toEqual([10, 20, 30]);
  });

  test('start beyond array length returns empty array', () => {
    expect(slice([1, 2, 3], 10)).toEqual([]);
  });

  test('end beyond array length clamps correctly', () => {
    expect(slice([1, 2, 3], 1, 10)).toEqual([2, 3]);
  });

  test('works with extremely negative start index', () => {
    expect(slice([1, 2, 3, 4], -999)).toEqual([1, 2, 3, 4]);
  });

  test('works with extremely negative end index', () => {
    expect(slice([1, 2, 3, 4], 0, -999)).toEqual([]);
  });

  test('result has correct dense indexes (no holes)', () => {
    const arr = [1, , 3, 4]; // sparse
    const result = slice(arr, 0, 4);
    const keys = Object.keys(result).map(Number);
    expect(keys).toEqual([0, 1, 2, 3]);
    expect(result).toEqual([1, undefined, 3, 4]);
  });

  test('handles empty array input', () => {
    expect(slice([], 1, 2)).toEqual([]);
  });

  test('handles non-array objects with length', () => {
    const obj = { 0: 'a', 1: 'b', length: 2 };
    expect(slice(obj, 0, 2)).toEqual(['a', 'b']);
  });

});
