import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface NavProps {
  setPosition?: string;
}

const NavDashBoard: React.FC<NavProps> = ({ setPosition }) => {
  return (
    <Container setPosition={setPosition}>
      <div className="movend" />
      <div className="i">
        <Link to="/">Meus jogos</Link>
        <Link to="/">Continuar</Link>
        <Link to="/">Comunidade</Link>
      </div>
    </Container>
  );
};

export default NavDashBoard;
