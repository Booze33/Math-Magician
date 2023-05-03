import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator/calculator';

test('Resets the calculator state when the AC button is clicked', () => {
  const { getByText } = render(<Calculator />);
  const acButton = getByText('7');

  fireEvent.click(acButton);

  const display = getByText('7');
  expect(display.textContent).toBe('7');
});