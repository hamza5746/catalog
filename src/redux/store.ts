import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import favoriteReducer from './reducers/favoriteReducer'; // Reducer file

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);