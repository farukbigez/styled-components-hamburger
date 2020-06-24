import React from 'react';
import { StyledMenu } from './Menu.styled';

interface Props {
  open: boolean,
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home Page</a>
      <a href="/">Products</a>
      <a href="/">About</a>
      <a href="/" className="sign-in">Sign In</a>
    </StyledMenu>
  );
};

export default Menu;
