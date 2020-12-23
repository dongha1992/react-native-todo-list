import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTodo, changeInput } from '../actions/action';

const TodoInput = () => {
  const dispatch = useDispatch();
  const inputFromStore = useSelector((input) => input.todoReducer);

  return (
    <KeyboardAvoidingView behavior='padding' enabled>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder='Add an item!'
          placeholderTextColor={'#999'}
          value={inputFromStore.input}
          onChangeText={(text) => {
            dispatch(changeInput(text));
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonStyle}
          title={'ADD'}
          onPress={(input) => {
            dispatch(addTodo(inputFromStore.input));
            dispatch(changeInput(''));
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  inputStyle: {
    margin: 15,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1.0,
  },
  buttonStyle: {},
});

export default TodoInput;
