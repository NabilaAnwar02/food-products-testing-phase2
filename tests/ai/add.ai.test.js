
import add from '../../src/utils/add.js';

describe('add.js (AI Tests)', () => {

  test('default augend or addend is treated as 0', () => {
    expect(add(undefined, 9)).toBe(9);
    expect(add(12, undefined)).toBe(12);
  });

  test('boolean values are coerced to numbers (true→1, false→0)', () => {
    expect(add(true, false)).toBe(1);
    expect(add(true, true)).toBe(2);
    expect(add(false, false)).toBe(0);
  });

  test('coercible arrays convert to numbers (e.g., [3] → 3)', () => {
    expect(add([3], [4])).toBe(7);
  });

  test('string concatenation is performed if any argument is a string', () => {
    expect(add('5', 5)).toBe('55');
    expect(add(2, '8')).toBe('28');
    expect(add('1', '9')).toBe('19');
  });

  test('whitespace numeric strings are concatenated as strings', () => {
    expect(add(' 4 ', ' 6 ')).toBe(' 4  6 ');
  });

  test('non-numeric strings concatenate without throwing error', () => {
    expect(add('abc', 5)).toBe('abc5');
    expect(add('x', 'y')).toBe('xy');
  });

  test('Infinity values propagate correctly', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 100)).toBe(-Infinity);
  });

  test('NaN inputs return NaN when both sides are numeric', () => {
  
    expect(add(NaN, 3)).toBeNaN();
    expect(add(7, NaN)).toBeNaN();
  });

  test('inputs are not mutated', () => {
    const a = 5;
    const b = 10;
    add(a, b);
    expect(a).toBe(5);
    expect(b).toBe(10);
  });

  test('commutative property holds for numeric inputs', () => {
    const a = 13;
    const b = 7;
    expect(add(a, b)).toBe(add(b, a));
  });

});
