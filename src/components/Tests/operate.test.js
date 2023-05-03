import operate from '../Calculator/logic/operate';

describe('Addition', () => {
  test('1 + 2 == 3?', () => {
    const numberOne = 1;
    const numberTwo = 2;
    const operation = '+';

    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('3');
  });

  test('3 - 3 == 0?', () => {
    const firstNumber = 3;
    const secondNumber = 3;
    const operation = '-';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('0');
  });

  test('4 ÷ 2 == 2?', () => {
    const firstNumber = 4;
    const secondNumber = 2;
    const operation = '÷';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('2');
  });

  test('4 x 2 == 8?', () => {
    const firstNumber = 4;
    const secondNumber = 2;
    const operation = 'x';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('8');
  });

  test('10 % 2 == 0?', () => {
    const firstNumber = 10;
    const secondNumber = 2;
    const operation = '%';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('0');
  });

  test('13 % 4 == 1?', () => {
    const firstNumber = 13;
    const secondNumber = 4;
    const operation = '%';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('1');
  });
});
