import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

test('renders MovieCard correctly', () => {
  const movie = {
    id: 1,
    title: 'Movie Title',
    vote_average: 7.5,
    overview: 'Movie overview text...',
    poster_path: '/path-to-poster.jpg',
  };

  const { getByText } = render(<MovieCard movie={movie} />);

  expect(getByText('Movie Title')).toBeInTheDocument();
  expect(getByText('Rating: 7.5')).toBeInTheDocument();
  expect(getByText('Movie overview text...')).toBeInTheDocument();
});
