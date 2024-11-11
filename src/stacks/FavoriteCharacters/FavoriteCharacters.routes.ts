import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type FavoriteCharactersStackParamList = {
  FavoriteCharactersScreen: undefined;
};

export type FavoriteCharactersStackNavigationProp =
  NativeStackNavigationProp<FavoriteCharactersStackParamList>;

export const FavoriteCharactersStackRoutes: {
  [route in keyof FavoriteCharactersStackParamList]: route;
} = {
  FavoriteCharactersScreen: 'FavoriteCharactersScreen',
};
