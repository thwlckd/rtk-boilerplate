import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggle as toggleStatus } from '../store/todoSlice';
import { ITodo } from '../types/todo';

const Todo = ({ content, id, active }: ITodo) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleStatus(id));
  };

  return (
    <>
      <TodoContainer>
        <Toggle type='checkBox' onClick={handleToggleTodo} checked={!active} />
        <Text active={active}>{content}</Text>
        <Button>clear</Button>
      </TodoContainer>
    </>
  );
};

export default Todo;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;
  line-height: 70px;
  margin-top: 10px;
  background-color: #fff;
`;

const Toggle = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 0 0 10px;
  accent-color: lightblue;
  cursor: pointer;

  &:hover {
  }
`;

const Text = styled.p<{ active: boolean }>`
  flex: 1;
  font-size: 30px;
  text-decoration: ${({ active }) => (active ? 'none' : 'line-through')};
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  margin-right: 10px;
  border: none;
  padding: 0;
  font-size: 18px;
  cursor: pointer;
  background-color: #60d0c0;

  &:hover {
    background-color: #70e0d0;
  }
`;
