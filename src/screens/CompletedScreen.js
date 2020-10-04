import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

const CompletedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Completed Screen</Text>
    </View>
  );
};

export default CompletedScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
