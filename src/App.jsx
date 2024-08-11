import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/todoSlice';

export const App = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {currentTodo ? <EditForm /> : <Form />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
