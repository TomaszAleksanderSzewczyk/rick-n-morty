import {atom} from 'jotai';
import {Character} from '../api/character';

export const favoritesAtom = atom<number[]>([]);

export const addToFavorites = (
  character: Character,
  setFavorites: (value: number[]) => void,
  currentFavorites: number[],
) => {
  if (!currentFavorites.includes(character.id)) {
    setFavorites([...currentFavorites, character.id]);
  }
};

export const removeFromFavorites = (
  characterId: number,
  setFavorites: (value: number[]) => void,
  currentFavorites: number[],
) => {
  setFavorites(currentFavorites.filter(id => id !== characterId));
};

export const isFavorite = (characterId: number, favorites: number[]) => {
  return favorites.includes(characterId);
};
