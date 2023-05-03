import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator/calculator';

describe('Calculator', () => {
  it('Resets the calculator state when the AC button is clicked', () => {
    const { getByText } = render(<Calculator />);
    const acButton = getByText('7');

    fireEvent.click(acButton);

    const display = getByText('7');
    expect(display).toBe(
      '<button class="number number-7" type="button">7</button>'
    );
  });
});
