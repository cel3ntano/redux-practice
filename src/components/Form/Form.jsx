import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const todo = e.target.elements.search.value.trim();
    dispatch(addTodo({ id: nanoid(), text: todo }));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
