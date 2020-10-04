import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  HomeStackNavigator,
  CompletedStackNavigator,
  ActiveStackNavigator,
} from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const constructIcon = (route) => ({ focused, color, size = 22 }) => {
  const iconName = (() => {
    switch (route.name) {
      case 'Completed':
        return focused ? 'md-checkmark-circle' : 'md-checkmark-circle-outline';
      case 'Active':
        return focused ? 'ios-list-box' : 'ios-list';
      case 'Home':
        return 'md-home';
      default:
        return;
    }
  })();

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#149911'
      inactiveColor='#03312E'
      barStyle={{ backgroundColor: '#C7FFED' }}
      screenOptions={({ route }) => ({
        tabBarIcon: constructIcon(route),
      })}
    >
      <Tab.Screen name='Active' component={ActiveStackNavigator} />
      <Tab.Screen name='Home' component={HomeStackNavigator} />
      <Tab.Screen name='Completed' component={CompletedStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
