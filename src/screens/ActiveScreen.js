import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

const ActiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ACTIVE</Text>
    </View>
  );
};

export default ActiveScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
