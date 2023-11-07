import { Children, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const [switchTodos, setSwitchTodos] = useState('ALL');

  return (
    <TodosCotainer>
      {Children.toArray(
        todos?.map(({ content, id, active }) => {
          switch (switchTodos) {
            case 'ALL':
              return <Todo content={content} id={id} active={active} />;
            case 'ACTIVE':
              return (
                active && <Todo content={content} id={id} active={active} />
              );
            case 'DONE':
              return (
                active || <Todo content={content} id={id} active={active} />
              );
            default:
              return false;
          }
        })
      )}
      <StateBar>
        <State
          onClick={() => {
            setSwitchTodos('ALL');
          }}
        >
          ALL
        </State>
        <State
          onClick={() => {
            setSwitchTodos('ACTIVE');
          }}
        >
          ACTIVE
        </State>
        <State
          onClick={() => {
            setSwitchTodos('DONE');
          }}
        >
          DONE
        </State>
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
