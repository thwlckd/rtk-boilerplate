import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        Created by <Bold>Hyub2</Bold>
      </Content>
      <Content>
        Series of <Bold>Todos</Bold> using{' '}
        <Bold>State Management Libraries</Bold>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 5dvh;
  text-align: center;
`;

const Content = styled.p`
  margin: 0;
  font-size: 14px;
  color: grey;
`;

const Bold = styled.b`
  color: black;
`;
