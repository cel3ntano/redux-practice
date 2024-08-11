import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';

export const Form = () => {
  return (
    <form className={style.form}>
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
