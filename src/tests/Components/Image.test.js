import React from 'react';
import { render, cleanup } from '@testing-library/react';
// components
import Image from '../../Components/atoms/Image';

describe('Test <Image /> Component', () => {
  afterEach(cleanup);

  test('should show default filter color (white) when color value has not been set', () => {
    const error = {
      message: 'error'
    };
    const { container } = render(<Image error={error} />);
    const styling = container.querySelector('img').style.WebkitFilter;

    expect(styling).toBe('opacity(1) drop-shadow(0 0 0 white)');
  });

  test('should show filter color when color value has been set', () => {
    const error = {
      message: null
    };
    const { container } = render(<Image color="rgba(100%, 3%, 0%, 1)" velocity="100" error={error} />);
    const styling = container.querySelector('img').style.WebkitFilter;

    expect(styling).toBe('opacity(1) drop-shadow(0 0 0 rgba(100%, 3%, 0%, 1))');
  });
});
