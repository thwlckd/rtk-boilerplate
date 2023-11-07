import { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { add } from '../store/todoSlice';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleAddTodo = ({ key }: React.KeyboardEvent) => {
    const input = inputRef.current?.value;

    if (!input || key !== 'Enter') return;

    dispatch(add(input));

    inputRef.current.value = '';
  };

  return (
    <TodoInput
      placeholder='Add your Todos'
      ref={inputRef}
      onKeyUp={handleAddTodo}
    />
  );
};

export default Input;

const TodoInput = styled.input`
  width: 40%;
  height: 5dvh;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 26px;
`;
