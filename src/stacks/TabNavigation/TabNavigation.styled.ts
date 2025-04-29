import {TextStyle, ViewStyle} from 'react-native';

interface TabBarStyles {
  tabBar: ViewStyle;
  tabBarItem: ViewStyle;
  tabBarLabel: TextStyle;
  tabBarIcon: ViewStyle;
  activeTintColor: string;
  inactiveTintColor: string;
  activeBackgroundColor: string;
}

export const tabBarStyles: TabBarStyles = {
  tabBar: {
    height: 90,
    backgroundColor: '#2C3E34',
    borderTopWidth: 0,
    elevation: 8,
  },
  tabBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  tabBarLabel: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  tabBarIcon: {
    marginTop: 2,
  },
  activeTintColor: '#FFFFFF',
  inactiveTintColor: '#B0B8B2',
  activeBackgroundColor: '#224229',
};
