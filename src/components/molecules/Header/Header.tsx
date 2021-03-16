import React from 'react';
import { HeaderWrapper } from './Header.styles';

interface Props {
  children: (false | JSX.Element | null)[];
}

const Header: React.FC<Props> = ({ children }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);

export default Header;
