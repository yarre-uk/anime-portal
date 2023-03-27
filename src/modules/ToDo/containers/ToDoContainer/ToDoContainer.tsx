import { StyledToDoContainer } from './ToDoContainerStyles';
import { ToDoItem } from '../../components';

import { ButtonStyled } from '@/components';
import { ITodo } from '@/models/todo.model';

interface IToDoContainerProps {
  todos: ITodo[];
}

const ToDoContainer = ({ todos }: IToDoContainerProps) => {
  const content = todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />);
  return (
    <StyledToDoContainer>
      <ButtonStyled to="/">Home</ButtonStyled>
      <ul>{content}</ul>
    </StyledToDoContainer>
  );
};

export default ToDoContainer;
