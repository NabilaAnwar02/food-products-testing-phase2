// tests/manual/drop.manual.test.js
import drop from '../../src/utils/drop.js';

describe('drop.js (Manual Tests)', () => {
  test('drops 1 element by default', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test('drops the specified number of elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test('dropping more elements than exist returns empty array', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test('dropping 0 elements returns the same array', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('handles null array input', () => {
    expect(drop(null, 2)).toEqual([]);
    expect(drop(undefined, 1)).toEqual([]);
  });

  test('negative drop count behaves like drop(0)', () => {
    expect(drop([1, 2, 3], -5)).toEqual([1, 2, 3]);
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    drop(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});
