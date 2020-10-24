import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
// components
import Dashboard from '../../Components/templates/Dashboard';
import { velocityLabel, hintMessage } from '../../constants';

describe('Test <Dashboard /> Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  test('renders Velocity label', () => {
    const { getByText } = render(<Dashboard />);
    const velocityElement = getByText(velocityLabel);
    expect(velocityElement).toBeInTheDocument();
  });
  
  test('renders Tips text', () => {
    const { getByText } = render(<Dashboard />);
    const tipsElement = getByText(hintMessage);
    expect(tipsElement).toBeInTheDocument();
  });

  test('should show error message when input is not a number', () => {
    // Arrange
    const { getByTestId, getByText } = render(<Dashboard />);
    const input = getByTestId('velocityValue');
    
    // Act
    fireEvent.change(input, { target: { value: 'string' } });
    
    // Assert
    expect(input.value).toBe('string');
    expect(getByText(/Please enter a valid number typed value/i)).toBeInTheDocument();
  });

  test('should show error message when the number contains more than 1 decimal place', () => {
    // Arrange
    const { getByTestId, getByText } = render(<Dashboard />);
    const input = getByTestId('velocityValue');
    
    // Act
    fireEvent.change(input, { target: { value: '10.2.2' } });
    
    // Assert
    expect(input.value).toBe('10.2.2');
    expect(getByText(/Please enter a valid number typed value/i)).toBeInTheDocument();
  });

  test('should show error message when value is not between -100 and 100', () => {
    // Arrange
    const { getByTestId, getByText } = render(<Dashboard />);
    const input = getByTestId('velocityValue');
    
    // Act
    fireEvent.change(input, { target: { value: '1000' } });
    
    // Assert
    expect(input.value).toBe('1000');
    expect(getByText(/Please enter the number typed value between -100 and 100/i)).toBeInTheDocument();
  });
});
