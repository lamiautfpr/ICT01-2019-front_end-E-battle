import React from 'react';
import Logo from '../../Assets/logo.png';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <nav>
        <img src={Logo} alt="" />
        <a href="index.html">Jogar</a>
        <a href="index.html">Tutoriais</a>
        <a href="index.html">Sobre</a>
        <a href="index.html">Login</a>
      </nav>
    </Container>
  );
};

export default NavBar;
