import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoContainer';
import TodoInput from './components/TodoInput';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import WeekCalendar from './WeekCalendar';
import Header from './components/Header';
import { MONTH_ARRARY } from './constants/MonthArray';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/store';

const store = createStore(rootReducer);

const App = () => {
  const [date, setDate] = useState(new Date().getMonth());

  console.log(store, 'Dd');
  
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safe}>
        <Header month={MONTH_ARRARY[date]} year={2020} />
        <TodoList />
        <TodoInput />
        {/* <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} /> */}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 60,
  },
  container: {
    flexDirection: 'row',
  },
});

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   input: {
//     width: 100,
//     height: 50,
//     borderWidth: 1,
//   },
// });
