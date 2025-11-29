import capitalize from '../../src/utils/capitalize.js';

describe('capitalize.js (Manual Tests)', () => {

  test('capitalizes a fully uppercase word', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('capitalizes a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalizes a mixed-case word', () => {
    expect(capitalize('hElLo')).toBe('Hello');
  });

  test('returns empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('converts non-strings using toString()', () => {
    expect(capitalize(123)).toBe('123');
    expect(capitalize(true)).toBe('True');
  });

  test('handles null and undefined by converting to strings', () => {
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
  });

});
