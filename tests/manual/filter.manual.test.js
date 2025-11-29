import filter from '../../src/utils/filter.js';
import { jest } from '@jest/globals';   

describe('filter.js (Manual Tests)', () => {

  test('filters simple numeric array', () => {
    const result = filter([1, 2, 3, 4], n => n > 2);
    expect(result).toEqual([3, 4]);     
  });

  test('returns [[]] when array is empty', () => {
    const result = filter([], x => x > 0);
    expect(result).toEqual([[]]);
  });

  test('returns [[]] when array is null', () => {
    const result = filter(null, x => x > 0);
    expect(result).toEqual([[]]);
  });

  test('predicate receives (value, index, array)', () => {
    const spy = jest.fn().mockReturnValue(true);
    const arr = [10];

    filter(arr, spy);

    expect(spy).toHaveBeenCalledWith(10, 0, arr);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('filters objects by property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];

    const result = filter(users, u => u.active);
    expect(result).toEqual([users[0]]);   
  });

});
