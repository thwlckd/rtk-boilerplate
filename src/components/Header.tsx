import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderWrapper>RTK Todos</HeaderWrapper>
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
