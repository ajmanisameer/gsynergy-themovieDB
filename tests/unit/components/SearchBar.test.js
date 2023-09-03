import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders SearchBar correctly', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  expect(getByPlaceholderText('Search movies...')).toBeInTheDocument();
});

test('handles input change correctly', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search movies...');

  fireEvent.change(inputElement, { target: { value: 'Movie Title' } });

  expect(inputElement.value).toBe('Movie Title');
});

test('handles search button click correctly', () => {
  const mockOnSearch = jest.fn();
  const { getByRole } = render(<SearchBar onSearch={mockOnSearch} />);
  const inputElement = getByRole('textbox');
  const buttonElement = getByRole('button', { name: 'Search' });

  fireEvent.change(inputElement, { target: { value: 'Movie Title' } });
  fireEvent.click(buttonElement);

  expect(mockOnSearch).toHaveBeenCalledWith('Movie Title');
});
