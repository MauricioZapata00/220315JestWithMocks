const suma = require('./suma');
test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1,2)).toBe(3)
});
test('dos mas dos son cuatro', () => {
    expect(2 + 2).toBe(4);
  });
test('asignacion de objeto', () => {
    const data = {uno: 1};
    data['dos'] = 2;
    expect(data).toEqual({uno: 1, dos: 2});
  });
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test('cero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
  test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); //comparador mayor que
    expect(value).toBeGreaterThanOrEqual(3.5); //comparador mayor o igual que
    expect(value).toBeLessThan(5); //comparador menor que
    expect(value).toBeLessThanOrEqual(4.5); //comparador menor o igual que
    // toBe y toEqual son equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/); //la cadena no contiene el carácter I
  });
  test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stop/); //la cadena contiene la cadena "stop"
  });
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });