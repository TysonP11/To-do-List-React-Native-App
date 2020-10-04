import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const TaskDetail = ({ route }) => {
  const task = route.params.task;
  const isComplete = route.params.isComplete;
  console.log(route);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Task: {task}.</Text>
      {isComplete ? (
        <Text style={styles.textStyle}>Status: Done.</Text>
      ) : (
        <Text style={styles.textStyle}>Status: Active</Text>
      )}
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
  },
});
