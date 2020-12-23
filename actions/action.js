import { ADD_TODO, DELETE_TODO, CHANGE_INPUT } from './types';

const currentTime = new Date().getTime();
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

let id = 0;

export const changeInput = (text) => {
  return {
    type: CHANGE_INPUT,
    payload: text,
  };
};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: id++,
      date: timeToString(currentTime),
    },
  };
};

export const deleteTodo = (item) => {
  console.log(item, 'after delete');
  return { type: DELETE_TODO, payload: item };
};
