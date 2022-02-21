import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/login">Jogar</Link>
          </li>
          <li>
            <Link to="/">Como jogar</Link>
          </li>
          <li>
            <Link to="/">Sobre</Link>
          </li>
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
