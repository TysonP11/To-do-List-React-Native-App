import React, { useRef, createRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { juxt } from 'ramda';
import { withNavigation } from 'react-navigation';

const TaskCard = ({ task, id, onDelete, navigation, isComplete, onDone }) => {
  const swipeableRow = useRef(createRef());

  const renderRightAction = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [1, 0, -2],
    });
    return (
      <Animated.View
        style={[
          styles.doneAction,
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        <RectButton
          onPress={juxt([swipeableRow.current.close, () => onDone(id)])}
        >
          {!isComplete ? (
            <MaterialIcons
              name='done'
              size={30}
              color='white'
              style={{ padding: 10 }}
            />
          ) : (
            <FontAwesome
              name='undo'
              size={30}
              color='white'
              style={{
                padding: 10,
              }}
            />
          )}
        </RectButton>
      </Animated.View>
    );
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [-2, 0, 1],
    });

    return (
      <Animated.View
        style={[
          styles.deleteAction,
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        <RectButton
          onPress={juxt([swipeableRow.current.close, () => onDelete(id)])}
        >
          <AntDesign
            name='delete'
            size={30}
            color='white'
            style={{
              //width: 30,
              padding: 10,
            }}
          />
        </RectButton>
      </Animated.View>
    );
  };

  const updateRef = (ref) => {
    swipeableRow.current = ref;
  };

  const updateBackgroundColor = () => {
    return isComplete
      ? styles.cardBackgroundCompleted
      : styles.cardBackgroundDefault;
  };

  return (
    <View style={[styles.container, updateBackgroundColor()]}>
      <Swipeable
        ref={updateRef}
        friction={1}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightAction}
      >
        <TouchableOpacity
          style={{
            height: 100 + '%',
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('Detail', {
              task: task,
              isComplete: isComplete,
            })
          }
        >
          <Text style={styles.textStyle}>{task}</Text>
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};

export default withNavigation(TaskCard);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 80,
    marginBottom: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteAction: {
    backgroundColor: '#F8333C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },
  doneAction: {
    backgroundColor: '#B5D2CB',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
  },
  cardBackgroundDefault: {
    backgroundColor: '#A8AEC1',
  },
  cardBackgroundCompleted: {
    backgroundColor: '#149911',
  },
});
