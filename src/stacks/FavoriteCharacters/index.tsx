import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FavoriteCharactersStackRoutes} from './FavoriteCharacters.routes';
import {FavoriteCharactersScreen} from './screens';

const Stack = createNativeStackNavigator();

export const FavoriteCharactersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.FavoriteCharactersScreen}
        children={FavoriteCharactersScreen}
      />
    </Stack.Navigator>
  );
};
