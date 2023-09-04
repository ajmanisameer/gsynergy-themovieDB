// actions.js
import axios from "axios";
import {
  FETCH_UPCOMING_MOVIES,
  SEARCH_MOVIES,
  FETCH_MOVIE_DETAILS,
  FETCH_ERROR,
} from "./actionTypes";

// const API_KEY = process.env.REACT_APP_TMDB_API_KEY; //  TMDb API key
const API_KEY = "777f1d257e712abbdee0192f77ac96a5";

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_UPCOMING_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    dispatch({ type: SEARCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ERROR, payload: error.message });
  }
};
