import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; // perform asynchronous actions

// Import your reducers here
import movieReducer from './movieReducer'; // Import your movieReducer or any other reducers you have

const rootReducer = combineReducers({
  movies: movieReducer, // Assuming movies is one of your state slices
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
