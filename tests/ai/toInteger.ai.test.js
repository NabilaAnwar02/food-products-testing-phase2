import toInteger from '../../src/utils/toInteger.js';

describe('toInteger.js (AI Tests)', () => {

  test('removes fractional part for both positive and negative numbers', () => {
    expect(toInteger(5.9)).toBe(5);
    expect(toInteger(-5.9)).toBe(-5);
    expect(toInteger(-1.0001)).toBe(-1);
  });

  test('handles very large floats safely (no precision errors)', () => {
    expect(toInteger(1.99999999999999e10)).toBe(19999999999);
  });

  test('string inputs are coerced correctly', () => {
    expect(toInteger('99.99')).toBe(99);
    expect(toInteger('-42.5')).toBe(-42);
  });

  test('boolean inputs behave as numbers', () => {
    expect(toInteger(true)).toBe(1);
    expect(toInteger(false)).toBe(0);
  });

  test('null, undefined, and empty string return 0', () => {
    expect(toInteger(null)).toBe(0);
    expect(toInteger(undefined)).toBe(0);
    expect(toInteger('')).toBe(0);
  });

  test('Infinity and -Infinity are converted using toFinite()', () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
    expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
  });

  test('objects use valueOf/toString coercion', () => {
    expect(toInteger({ valueOf: () => 8.7 })).toBe(8);
    expect(toInteger({ toString: () => '5.4' })).toBe(5);
  });

});
