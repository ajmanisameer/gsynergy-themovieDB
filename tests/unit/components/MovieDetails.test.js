import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';

test('renders MovieDetails correctly', () => {
  const movie = {
    title: 'Movie Title',
    vote_average: 7.5,
    overview: 'Movie overview text...',
  };

  const { getByText } = render(<MovieDetails movie={movie} />);

  expect(getByText('Movie Title')).toBeInTheDocument();
  expect(getByText('Rating: 7.5')).toBeInTheDocument();
  expect(getByText('Movie overview text...')).toBeInTheDocument();
});
