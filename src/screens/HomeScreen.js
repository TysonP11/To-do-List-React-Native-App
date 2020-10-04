import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (term === '') {
      return;
    }
    const id = taskList.length;
    const task = { term: term, id: id, completed: false };
    setTaskList([task, ...taskList]);
    setTerm('');
  };

  const onDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const onToggle = (id) => {
    const updatedList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : { ...task }
    );
    setTaskList(updatedList);
  };

  // console.log(term);
  console.log(taskList);

  return (
    <View style={styles.container}>
      <TaskInput term={term} onTermChange={setTerm} onTermSubmit={addTask} />
      <TaskList
        taskList={taskList}
        navigation={navigation}
        onDelete={onDelete}
        onDone={onToggle}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
