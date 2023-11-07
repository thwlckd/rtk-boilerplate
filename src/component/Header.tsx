import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderWrapper>RTK Todos</HeaderWrapper>
      <Input placeholder='Add your Todos' />
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 13dvh;
  line-height: 13dvh;
  text-align: center;
  font-size: 50px;
  font-weight: 300;
  color: maroon;
`;

const Input = styled.input`
  width: 40%;
  height: 5dvh;
  padding: 0 20px;
  border-radius: 30px;
  font-size: 26px;
`;
