import { ReactNode } from 'react';
import { styled } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Input />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  background-color: #f5f5f5;
  overflow: hidden;
`;
