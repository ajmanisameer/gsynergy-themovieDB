// reducers.js
import { FETCH_UPCOMING_MOVIES, SEARCH_MOVIES } from './actionTypes';

const initialState = {
  upcomingMovies: [],
  searchResults: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return { ...state, upcomingMovies: action.payload };
    case SEARCH_MOVIES:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
