import { RAnimeItem } from '../../services/response.interface';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, FavoriteActionTypes } from '../actions';

// interface Item {
//   id: string;
// }

interface FavoriteState {
  favorites: RAnimeItem[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action: FavoriteActionTypes): FavoriteState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.mal_id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
