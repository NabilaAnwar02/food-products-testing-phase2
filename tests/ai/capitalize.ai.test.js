import capitalize from '../../src/utils/capitalize.js';

describe('capitalize.js (AI Tests)', () => {

  test('leading and trailing spaces do NOT change the capitalization', () => {
    expect(capitalize('   hello')).toBe('   hello');  
    expect(capitalize('world   ')).toBe('World   ');  
  });

  test('handles strings containing numbers and symbols', () => {
    expect(capitalize('abc123')).toBe('Abc123');
    expect(capitalize('#tag')).toBe('#tag');
    expect(capitalize('!wow')).toBe('!wow');
  });

  test('works with Unicode characters', () => {
    expect(capitalize('ñandú')).toBe('Ñandú');
    expect(capitalize('øne')).toBe('Øne');
  });

  test('capitalizes long sentences: only first character changes, rest becomes lowercase', () => {
    const input = 'hello WORLD and MORE';
    expect(capitalize(input)).toBe('Hello world and more');
  });

  test('handles objects by converting them using toString()', () => {
    expect(capitalize({ a: 1 })).toBe('[object object]');
  });

  test('symbol inputs are converted via toString()', () => {
    const sym = Symbol('test');
    const str = sym.toString().toLowerCase();
    const expected = str.charAt(0).toUpperCase() + str.slice(1);
    expect(capitalize(sym)).toBe(expected);
  });

  test('arrays become comma-joined strings before capitalization', () => {
    expect(capitalize([1, 2, 3])).toBe('1,2,3');
  });

});
