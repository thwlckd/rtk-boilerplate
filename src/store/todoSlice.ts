import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../types/todo';
import { getLocalStorage } from '../utils/todo';

interface TodoList {
  todos: Array<ITodo>;
}

const initialState: TodoList = {
  todos: getLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const id = state.todos.length + 1;
      localStorage.setItem(
        String(id),
        JSON.stringify({
          id: id,
          content: action.payload,
          active: true,
        })
      );
      state.todos.push({
        id: id,
        content: action.payload,
        active: true,
      });
    },
    toggle: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          const item = localStorage.getItem(String(action.payload));
          if (item) {
            const { id, content, active } = JSON.parse(item);
            localStorage.setItem(
              String(id),
              JSON.stringify({
                id,
                content,
                active: !active,
              })
            );
          }
          return { ...todo, active: !todo.active };
        } else return todo;
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      localStorage.removeItem(String(action.payload));
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { add, toggle, remove } = todoSlice.actions;

export default todoSlice.reducer;
