import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import TaskCard from './TaskCard';

const TaskList = ({ taskList, navigation, onDelete, onDone }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => {
          return (
            <TaskCard
              navigation={navigation}
              task={item.term}
              id={item.id}
              onDelete={onDelete}
              isComplete={item.completed}
              onDone={onDone}
            />
          );
        }}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 10,
    //marginBottom: 10,
    //borderTopWidth: 1,
    paddingVertical: 10,
    //borderBottomWidth: 1,
  },
});
