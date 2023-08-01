import React from 'react';
import { render, screen } from '@testing-library/react';
import Moneypot from './MoneyPot';

test('renders learn react link', () => {
  render(<Moneypot />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
