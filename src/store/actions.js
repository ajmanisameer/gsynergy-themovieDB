// actions.js
import axios from 'axios';
import { FETCH_UPCOMING_MOVIES, SEARCH_MOVIES } from './actionTypes';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; //  TMDb API key

export const fetchUpcomingMovies = () => async (dispatch) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_UPCOMING_MOVIES, payload: response.data.results });
  } catch (error) {
    // Handle error
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
  } catch (error) {
    // Handle error
  }
};
