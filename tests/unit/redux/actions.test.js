import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchMovieDetails, searchMovies } from '../redux/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('fetchMovieDetails action dispatches correct action', () => {
  const store = mockStore({});
  const movieId = 1;

  return store.dispatch(fetchMovieDetails(movieId)).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('FETCH_MOVIE_DETAILS');
  });
});

test('searchMovies action dispatches correct action', () => {
  const store = mockStore({});
  const query = 'Movie Title';

  return store.dispatch(searchMovies(query)).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual('SEARCH_MOVIES');
  });
});
