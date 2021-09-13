import React from 'react';
import { WrapperLayout } from './styled';

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <header>header</header>
      {children}
    </WrapperLayout>
  );
};

export default Layout;
