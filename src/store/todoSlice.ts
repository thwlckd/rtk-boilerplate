import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../types/todo';

interface TodoList {
  todos: Array<ITodo>;
}

const initialState: TodoList = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.todos.length + 1,
        content: action.payload,
        active: true,
      });
    },
    toggle: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, active: !todo.active };
        else return todo;
      });
    },
  },
});

export const { add, toggle } = todoSlice.actions;

export default todoSlice.reducer;
