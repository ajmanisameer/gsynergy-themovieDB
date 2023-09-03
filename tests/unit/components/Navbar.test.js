// Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('Navbar renders correctly', () => {
  render(<Navbar />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
});
