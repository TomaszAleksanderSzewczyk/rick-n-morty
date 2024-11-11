import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../CharacterDetails/CharacterDetails.routes';

export type CharacterListStackParamList = {
  CharacterListScreen: undefined;
  CharacterDetailsStack: NavigatorScreenParams<CharacterDetailsStackParamList>;
};

export type CharacterListStackNavigationProp =
  NativeStackNavigationProp<CharacterListStackParamList>;

export const CharacterListStackRoutes: {
  [route in keyof CharacterListStackParamList]: route;
} = {
  CharacterListScreen: 'CharacterListScreen',
  CharacterDetailsStack: 'CharacterDetailsStack',
};
