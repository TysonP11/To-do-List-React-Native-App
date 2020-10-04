import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TaskInput = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder='Add something to your todo list'
        autoCapitalize='characters'
        autoCorrect={true}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        value={term}
      />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#149911',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
