import movieReducer from '../redux/reducers';
import { FETCH_MOVIE_DETAILS, SEARCH_MOVIES } from '../redux/actionTypes';

test('movieReducer handles FETCH_MOVIE_DETAILS action', () => {
  const initialState = {
    movieDetails: null,
  };

  const action = {
    type: FETCH_MOVIE_DETAILS,
    payload: { title: 'Movie Title', vote_average: 7.5 },
  };

  const newState = movieReducer(initialState, action);

  expect(newState.movieDetails).toEqual(action.payload);
});

test('movieReducer handles SEARCH_MOVIES action', () => {
  const initialState = {
    searchResults: [],
  };

  const action = {
    type: SEARCH_MOVIES,
    payload: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
  };

  const newState = movieReducer(initialState, action);

  expect(newState.searchResults).toEqual(action.payload);
});
