import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter, selectFilter } from 'reduxTodo/filteredSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <input
      onChange={handleChange}
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
    />
  );
};
