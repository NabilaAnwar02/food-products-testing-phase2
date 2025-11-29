import ceil from '../../src/utils/ceil.js';

describe('ceil.js (Manual Tests)', () => {

  test('rounds a decimal number up to nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(4.1)).toBe(5);
  });

  test('rounds with positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01); 
    expect(ceil(1.2345, 3)).toBe(1.235);
  });

  test('rounds with negative precision (tens, hundreds)', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(149, -1)).toBe(150);
  });

  test('returns NaN for non-numeric values', () => {
    expect(ceil('abc')).toBeNaN();
    expect(ceil(undefined)).toBeNaN();
  });

  test('numeric strings convert correctly', () => {
    expect(ceil('4.2')).toBe(5);
    expect(ceil('6.001', 2)).toBe(6.01);
  });

  test('null coerces to 0', () => {
    expect(ceil(null)).toBe(0); 
  });

});
