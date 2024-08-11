import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
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
    editTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },
    updateTodo: (state, { payload }) => {
      state.items = state.items.map(item => {
        return item.id === state.currentTodo.id
          ? { ...item, text: payload }
          : item;
      });
      state.currentTodo = null;
    },
  },
  selectors: {
    selectTodos: state => state.items,
    selectCurrentTodo: state => state.currentTodo,
  },
});

export const todosReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, updateTodo } = todoSlice.actions;
export const { selectTodos, selectCurrentTodo } = todoSlice.selectors;
