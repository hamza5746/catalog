import { RAnimeItem } from "../services/response.interface";

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: RAnimeItem;
}

interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: number; // Assuming the ID is a string
}
export const addToFavorites = (item: RAnimeItem): FavoriteActionTypes => ({
    type: ADD_TO_FAVORITES,
    payload: item,
  });
  
  export const removeFromFavorites = (itemId: number): FavoriteActionTypes => ({
    type: REMOVE_FROM_FAVORITES,
    payload: itemId,
  });

export type FavoriteActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction;
