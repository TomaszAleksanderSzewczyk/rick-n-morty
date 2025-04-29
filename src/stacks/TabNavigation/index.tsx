import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {tabBarStyles} from './TabNavigation.styled';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: tabBarStyles.tabBar,
      tabBarItemStyle: tabBarStyles.tabBarItem,
      tabBarLabelStyle: tabBarStyles.tabBarLabel,
      tabBarIconStyle: tabBarStyles.tabBarIcon,
      tabBarActiveTintColor: tabBarStyles.activeTintColor,
      tabBarInactiveTintColor: tabBarStyles.inactiveTintColor,
      tabBarActiveBackgroundColor: tabBarStyles.activeBackgroundColor,
    }}>
    <Tab.Screen
      name="Characters"
      component={CharacterListScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="people" size={20} color={color} />
        ),
        tabBarLabel: ({color}) => (
          <Text style={{color, marginLeft: 4}}>ALL CHARACTERS</Text>
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoriteCharactersScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="star" size={20} color={color} />
        ),
        tabBarLabel: ({color}) => (
          <Text style={{color, marginLeft: 4}}>LIKED CHARACTERS</Text>
        ),
      }}
    />
  </Tab.Navigator>
);
