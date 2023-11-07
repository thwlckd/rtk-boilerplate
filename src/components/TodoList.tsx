import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <TodosCotainer>
      {todos?.map(({ content, id, active }) => (
        <Todo content={content} id={id} active={active} />
      ))}
      <StateBar>
        <State>ALL</State>
        <State>NOT YET</State>
        <State>DONE</State>
      </StateBar>
    </TodosCotainer>
  );
};

export default TodoList;

const TodosCotainer = styled.main`
  flex: 1;
  width: 40vw;
`;

const StateBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const State = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-size: 1;
`;
