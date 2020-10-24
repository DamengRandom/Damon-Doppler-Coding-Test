import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// components
import Input from '../../Components/atoms/Input';

describe('Test <Input /> Component', () => {
  afterEach(cleanup);

  const setup = () => {
    const utils = render(<Input data-testid="velocityValue" id="velocityValue" />);
    const input = utils.getByTestId('velocityValue');
    return {
      input,
      ...utils
    };
  };

  test('should display the latest value when user types on the input field', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');
  });

  test('should support float type value when user types', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: '10.2' } });
    expect(input.value).toBe('10.2');
  });
});
