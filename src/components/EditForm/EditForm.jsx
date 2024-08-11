import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { editTodo, selectCurrentTodo, updateTodo } from 'reduxTodo/todoSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = e.target.elements.text.value.trim();
    dispatch(updateTodo(updatedTodo));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => dispatch(editTodo(null))}
        className={style.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
