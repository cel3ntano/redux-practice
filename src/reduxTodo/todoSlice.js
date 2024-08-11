import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

export const todosReducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
