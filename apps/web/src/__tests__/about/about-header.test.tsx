import React from 'react';
import { render } from '@testing-library/react';
import AboutHeader from '@/components/about/about-header';

describe('AboutHeader', () => {
  it('renders the text passed as a prop', () => {
    const { getByText } = render(<AboutHeader text="Test Header" />);
    const headerElement = getByText(/Test Header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('applies the correct class names', () => {
    const { container } = render(<AboutHeader text="Test Header" />);
    const headerElement = container.querySelector('h2');
    expect(headerElement).toHaveClass('text-light-gray text-lg font-bold mt-[30px] mb-[30px]');
  });
});
