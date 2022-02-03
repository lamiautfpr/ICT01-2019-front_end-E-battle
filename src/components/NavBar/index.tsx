import React from 'react';
import Logo from '../../Assets/logo.png';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="" />
    </Container>
  );
};

export default NavBar;
