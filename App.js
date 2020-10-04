import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigation from './src/navigations/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
