import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CharacterListStackParamList} from '../CharacterList/CharacterList.routes';
import {FavoriteCharactersStackParamList} from '../FavoriteCharacters/FavoriteCharacters.routes';

export type TabNavigationStackParamList = {
  CharacterListStack: NavigatorScreenParams<CharacterListStackParamList>;
  FavoriteCharactersStack: NavigatorScreenParams<FavoriteCharactersStackParamList>;
};

export type TabStackNavigationProp =
  NativeStackNavigationProp<TabNavigationStackParamList>;

export const TabNavigationStackRoutes: {
  [route in keyof TabNavigationStackParamList]: route;
} = {
  CharacterListStack: 'CharacterListStack',
  FavoriteCharactersStack: 'FavoriteCharactersStack',
};
