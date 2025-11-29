import map from '../../src/utils/map.js';

describe('map.js (AI Tests)', () => {

  test('creates a new array with identical length to input', () => {
    const arr = [10, 20, 30];
    const result = map(arr, x => x);
    expect(result.length).toBe(arr.length);
  });

  test('supports mapping to different data types', () => {
    const result = map([1, 2], x => `val-${x}`);
    expect(result).toEqual(['val-1', 'val-2']);
  });

  test('works correctly on sparse arrays (holes become undefined)', () => {
    const arr = [1, , 3]; // hole at index 1
    const result = map(arr, (v, i) => (v === undefined ? `hole${i}` : v * 2));
    expect(result).toEqual([2, 'hole1', 6]);
  });

  test('iteratee may use full array reference for logic', () => {
    const result = map([2, 4, 6], (v, i, a) => v / a.length);
    expect(result).toEqual([2 / 3, 4 / 3, 6 / 3]);
  });

  test('mapping function may return objects', () => {
    const result = map([1, 2], x => ({ value: x }));
    expect(result).toEqual([{ value: 1 }, { value: 2 }]);
  });

  test('mapping with index-dependent logic', () => {
    const result = map([5, 5, 5], (v, i) => v + i);
    expect(result).toEqual([5, 6, 7]);
  });

  test('if iteratee throws, map should propagate the error', () => {
    const badFn = () => {
      throw new Error('test error');
    };

    expect(() => map([1, 2], badFn)).toThrow('test error');
  });

});
