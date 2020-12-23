import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Animated } from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { deleteTodo } from '../actions/action';

const currentTime = new Date().getTime();
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

console.log(timeToString);

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((list) => list.todoReducer);

  const todoItem = todoList.todoList;
  console.log(todoItem, 'todo item');
  let items = [];

  const formattedTodoList = (todoItem) => {
    for (let el in todoItem) {
      let date = todoItem[el].date;
      if (!items[date]) {
        items[date] = [];
        items[date].push({
          id: todoItem[el].id,
          name: todoItem[el].todo,
          completed: false,
        });
      } else {
        items[date].push({
          id: todoItem[el].id,
          name: todoItem[el].todo,
          completed: false,
        });
      }
    }
  };

  const filteredTodoList = (id) => {
    console.log(id);
    const items = todoItem.filter((item) => {
      return item.id !== id;
    });
    dispatch(deleteTodo(items));
  };

  formattedTodoList(todoItem);

  const renderItem = (item) => {
    return (
      <View style={{ marginRight: 10, marginTop: 37 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Icon
                name='trash'
                size={24}
                color='black'
                backgroundColor='white'
                onPress={() => {
                  filteredTodoList(item.id);
                }}></Icon>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        selcted={timeToString(currentTime)}
        items={items}
        renderItem={renderItem}
        theme={{
          // agendaTodayColor: 'red',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            },
          },
        }}
        refreshing={false}
        refreshControl={null}
        hideKnob={true}
        renderEmptyDate={() => {
          return (
            <View>
              <TEXT>please</TEXT>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TodoList;
