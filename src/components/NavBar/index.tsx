import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Logo from '../../Assets/logo.png';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="" />
        <ul>
          <li>Jogar</li>
          <li>Como jogar</li>
          <li>Sobre</li>
        </ul>
      </div>
      <button type="button">
        Entrar
        <IoPersonCircleOutline size={32} />
      </button>
    </Container>
  );
};

export default NavBar;
