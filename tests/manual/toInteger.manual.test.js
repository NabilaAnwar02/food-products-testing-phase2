import toInteger from '../../src/utils/toInteger.js';

describe('toInteger.js (Manual Tests)', () => {

  test('converts positive floats to integers by removing decimal', () => {
    expect(toInteger(3.7)).toBe(3);
    expect(toInteger(10.99)).toBe(10);
  });

  test('converts negative floats correctly (toward zero)', () => {
    expect(toInteger(-3.7)).toBe(-3);
    expect(toInteger(-0.9)).toBe(0);
  });

  test('returns 0 for very small values', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  test('handles strings that represent numbers', () => {
    expect(toInteger('4.8')).toBe(4);
    expect(toInteger('10')).toBe(10);
  });

  test('Infinity returns max finite number', () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
  });

  test('NaN returns 0 (because toFinite(NaN) → 0)', () => {
    expect(toInteger(NaN)).toBe(0);
  });

});
