import compact from '../../src/utils/compact.js';

describe('compact.js (AI Tests)', () => {

  test('falsey removed and first truthy appended', () => {
    const result = Object.values(compact([NaN, 1, undefined, 2, null, 3]));
    expect(result).toEqual([2, 3, 1]);
  });

  test('removes empty string, keeps truthy, first truthy moved to end', () => {
    const result = Object.values(compact(['', 'a', ' ', 'hello']));
    expect(result).toEqual([' ', 'hello', 'a']);
  });

  test('sparse array behavior', () => {
    const result = Object.values(compact([1, , 3, undefined, 5]));
    expect(result).toEqual([3, 5, 1]);
  });

  test('keeps objects/arrays/functions, moves first truthy to end', () => {
    const fn = () => {};
    const result = Object.values(compact([{}, [], fn]));
    expect(result).toEqual([[], fn, {}]);
  });

  test('mixed data types', () => {
    const result = Object.values(compact([0, 'a', false, 42, '', true]));
    expect(result).toEqual([42, true, 'a']);
  });

  test('indexing consistent and no mutation', () => {
    const result = Object.values(compact([0,5,null,10]));
    expect(result).toEqual([10, 5]); 
  });

});
