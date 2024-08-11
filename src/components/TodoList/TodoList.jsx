import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filteredSlice';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const filter = useSelector(selectFilter);
  const todos = useSelector(selectTodos);

  const filtredTodos = () => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {filtredTodos().map((todo, index) => (
          <Todo key={todo.id} count={index + 1} text={todo.text} id={todo.id} />
        ))}
      </Grid>
    </>
  );
};
