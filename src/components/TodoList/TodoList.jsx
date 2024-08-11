import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, index) => (
          <Todo key={todo.id} count={index + 1} text={todo.text} />
        ))}
      </Grid>
    </>
  );
};
