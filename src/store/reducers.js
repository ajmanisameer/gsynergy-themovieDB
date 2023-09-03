// reducers.js
import { FETCH_UPCOMING_MOVIES, SEARCH_MOVIES, FETCH_MOVIE_DETAILS } from './actionTypes';

const initialState = {
  upcomingMovies: [],
  searchResults: [],
  movieDetails: null, 
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return { ...state, upcomingMovies: action.payload };
    case SEARCH_MOVIES:
      return { ...state, searchResults: action.payload };
    case FETCH_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
