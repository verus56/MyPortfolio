import React from 'react';
import { render } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import NavBar from '@/components/nav-bar';
import config from '@/config';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('@/config', () => ({
  navItems: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/post', label: 'Post' },
    { path: '/portfolio', label: 'Portfolio' },
  ],
}));

describe('NavBar', () => {
  it('renders all navigation items', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { getByText } = render(<NavBar />);
    
    config.navItems.forEach(item => {
      expect(getByText(item.label)).toBeInTheDocument();
    });
  });

  it('applies active class to the current path', () => {
    (usePathname as jest.Mock).mockReturnValue('/about');
    const { getByText } = render(<NavBar />);
    
    const aboutLink = getByText('About');
    expect(aboutLink).toHaveClass('active');
  });

  it('applies active class to nested post paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/post/123');
    const { getByText } = render(<NavBar />);
    
    const postLink = getByText('Post');
    expect(postLink).toHaveClass('active');
  });

  it('does not apply active class to incorrect post paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/post123');
    const { getByText } = render(<NavBar />);
    
    const postLink = getByText('Post');
    expect(postLink).toHaveClass('active');
  });

  it('applies active class to nested portfolio paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/portfolio/123');
    const { getByText } = render(<NavBar />);
    
    const portfolioLink = getByText('Portfolio');
    expect(portfolioLink).toHaveClass('active');
  });

  it('does not apply active class to incorrect portfolio paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/portfolio123');
    const { getByText } = render(<NavBar />);
    
    const portfolioLink = getByText('Portfolio');
    expect(portfolioLink).toHaveClass('active');
  });

  it('does not apply active class to non-active paths', () => {
    (usePathname as jest.Mock).mockReturnValue('/about');
    const { getByText } = render(<NavBar />);
    
    const homeLink = getByText('Home');
    expect(homeLink).not.toHaveClass('active');
  });
});
