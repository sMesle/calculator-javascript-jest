var calculator = require('./calculator');

test('addition 1 + 2 should be equals to 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('substract 1 - 1 should be equals to 0', () => {
    expect(calculator.substract(1, 1)).toBe(0);
});

test('divide 2 by 2 should be equals to 1', () => {
    expect(calculator.divider(2, 2)).toBe(1);
});

test('multiply 3 by 2 should be equals to 6', () => {
    expect(calculator.multiplier(3, 2)).toBe(6);
});