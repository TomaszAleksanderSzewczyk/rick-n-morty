import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {TabNavigationStack} from './src/stacks/TabNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigationStack />
    </NavigationContainer>
  );
}

export default App;
