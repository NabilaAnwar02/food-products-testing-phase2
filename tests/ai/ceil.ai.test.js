import ceil from '../../src/utils/ceil.js';

describe('ceil.js (AI Tests)', () => {

  test('handles negative numbers correctly', () => {
    expect(ceil(-4.1)).toBe(-4);
    expect(ceil(-4.0001)).toBe(-4);
  });

  test('handles precision edge cases', () => {
    expect(ceil(1.005, 2)).toBe(1.01);
    expect(ceil(100.1, -1)).toBe(110);
  });

  test('precision larger than digits still works', () => {
    expect(ceil(5.1, 10)).toBe(5.1);
  });

  test('returns same number when already an integer', () => {
    expect(ceil(10)).toBe(10);
    expect(ceil(10, 2)).toBe(10);
  });

  test('handles Infinity and -Infinity', () => {
    expect(ceil(Infinity)).toBe(Infinity);
    expect(ceil(-Infinity)).toBe(-Infinity);
  });

  test('NaN inputs return NaN, but NaN precision defaults to 0', () => {
    expect(ceil(NaN)).toBeNaN();
    expect(ceil(5, NaN)).toBe(5); 
  });

  test('arrays convert when coercible', () => {
    expect(ceil([4.2])).toBe(5);
    expect(ceil([6.001], 2)).toBe(6.01);
  });

});
