import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  HomeScreen,
  TaskDetail,
  CompletedScreen,
  ActiveScreen,
} from '../screens/index';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={TaskDetail} />
    </Stack.Navigator>
  );
};

const CompletedStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Completed'>
      <Stack.Screen name='Completed' component={CompletedScreen} />
      <Stack.Screen name='Detail' component={TaskDetail} />
    </Stack.Navigator>
  );
};

const ActiveStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Active'>
      <Stack.Screen name='Active' component={ActiveScreen} />
      <Stack.Screen name='Detail' component={TaskDetail} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, ActiveStackNavigator, CompletedStackNavigator };
