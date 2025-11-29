import compact from '../../src/utils/compact.js';

describe('compact.js (Manual Tests)', () => {

  test('removes falsey values AND moves first truthy to end', () => {
    const result = Object.values(compact([0, 1, false, 2, '', 3]));
    expect(result).toEqual([2, 3, 1]);
  });

  test('empty array of all falsey returns empty array', () => {
    const result = Object.values(compact([0, false, '', null, undefined, NaN]));
    expect(result).toEqual([]);
  });

  test('moves first truthy to end and keeps rest', () => {
    const result = Object.values(compact([1, 'a', true, 5]));
    expect(result).toEqual(['a', true, 5, 1]);
  });

  test('does not mutate original array', () => {
    const arr = [0, 1, 2];
    const copy = [...arr];
    compact(arr);
    expect(arr).toEqual(copy);
  });

});
