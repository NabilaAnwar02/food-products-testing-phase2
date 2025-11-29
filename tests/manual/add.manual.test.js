import add from '../../src/utils/add.js';

describe('add.js (Manual Tests)', () => {

  test('adds two positive integers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds positive decimals with correct precision', () => {
    expect(add(1.25, 2.75)).toBeCloseTo(4.0);
  });

  test('handles zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test('adds negative numbers (discount handling)', () => {
    expect(add(10, -3)).toBe(7);
    expect(add(-2, -5)).toBe(-7);
  });

  test('handles very large numbers', () => {
    expect(add(1e9, 1e9)).toBe(2e9);
  });

  test('treats null and undefined as 0 (createMathOperation default)', () => {
    expect(add(null, 5)).toBe(5);
    expect(add(5, undefined)).toBe(5);
  });

  test('string arguments result in concatenation (actual behavior)', () => {
    expect(add('3', '4')).toBe('34');     
    expect(add('10', 5)).toBe('105');     
  });

  test('non-numeric strings also concatenate (actual behavior)', () => {
    expect(add('abc', 5)).toBe('abc5');
    expect(add('x', 'y')).toBe('xy');
  });

});
