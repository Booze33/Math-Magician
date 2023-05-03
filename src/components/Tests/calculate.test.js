import calculate from '../Calculator/logic/calculate';

describe('Calculator', () => {
  it('should return null', () => {
    const button = 'AC';
    const obj = {
      total: 5,
      next: 3,
      operation: '-',
    };

    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    const actual = calculate(obj, button);
    expect(actual).toStrictEqual(expected);
  });

  it('should return total', () => {
    const button = '=';
    const obj = {
      total: 5,
      next: 3,
      operation: '-',
    };

    const expected = {
      total: '2',
      next: null,
      operation: null,
    };

    const actual = calculate(obj, button);
    expect(actual).toStrictEqual(expected);
  });

  it('should return minus or plus', () => {
    const button = '+/-';
    const obj = {
      total: null,
      next: 3,
      operation: null,
    };

    const expected = {
      total: null,
      next: '-3',
      operation: null,
    };

    const actual = calculate(obj, button);
    expect(actual).toStrictEqual(expected);
  });

  it('should return decimals', () => {
    const button = '.';
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const expected = {
      total: null,
      next: '0.',
      operation: null,
    };

    const actual = calculate(obj, button);
    expect(actual).toStrictEqual(expected);
  });
});
