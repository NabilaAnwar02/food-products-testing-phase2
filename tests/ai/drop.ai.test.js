import drop from '../../src/utils/drop.js';

describe('drop.js (AI Tests)', () => {
  test('drops elements using toInteger() conversion', () => {
    expect(drop([1, 2, 3, 4], '2')).toEqual([3, 4]);
    expect(drop([1, 2, 3], true)).toEqual([2, 3]); // true → 1
    expect(drop([1, 2, 3], false)).toEqual([1, 2, 3]); // false → 0
  });

  test('handles extremely large drop counts', () => {
    expect(drop([1, 2, 3], 9999)).toEqual([]);
    expect(drop([1, 2, 3], Infinity)).toEqual([]);
  });

  test('handles negative + string + boolean inputs', () => {
    expect(drop([1, 2, 3], -5)).toEqual([1, 2, 3]);     // negative → treated as 0
    expect(drop([1, 2, 3], '0')).toEqual([1, 2, 3]);    // "0" → 0
    expect(drop([1, 2, 3], '1')).toEqual([2, 3]);       // "1" → 1
    expect(drop([1, 2, 3], true)).toEqual([2, 3]);      // true → 1
  });

  test('works with sparse arrays (holes become undefined because slice creates dense arrays)', () => {
    const arr = [1, , 3, 4]; // hole at index 1

    const result = drop(arr, 1);

    // Your slice() turns holes into explicit undefined values
    expect(result).toEqual([undefined, 3, 4]);

    // dense array check — all indices must exist
    expect(0 in result).toBe(true);
    expect(1 in result).toBe(true);
    expect(2 in result).toBe(true);

    expect(result.length).toBe(3);
  });

  test('handles array-like objects', () => {
    const arrayLike = { 0: 'a', 1: 'b', length: 2 };
    expect(drop(arrayLike, 1)).toEqual(['b']);
  });

  test('nullish values return empty array', () => {
    expect(drop(null)).toEqual([]);
    expect(drop(undefined)).toEqual([]);
  });

  test('does not mutate input array', () => {
    const arr = [1, 2, 3];
    const copy = [...arr];

    drop(arr, 1);

    expect(arr).toEqual(copy);
  });
});
