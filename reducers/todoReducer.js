import { CHANGE_INPUT, ADD_TODO, DELETE_TODO } from '../actions/types';
import RNDateFormat from 'react-native-date-format';

const initialState = {
  input: '',
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(action.payload, 'payload');
  console.log(action, 'action');

  switch (action.type) {
    case CHANGE_INPUT: {
      return { ...state, input: action.payload };
    }

    case ADD_TODO: {
      return {
        ...state,
        todoList: state.todoList.concat({
          id: action.payload.id,
          todo: action.payload.text,
          date: action.payload.date,
        }),
      };
    }

    case DELETE_TODO:
      return { ...action.payload };
    default:
      return state;
  }
};

export default todoReducer;
