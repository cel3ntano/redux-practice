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
  },
  selectors: {
    selectTodos: state => state.items,
  },
});

export const todosReducer = todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
