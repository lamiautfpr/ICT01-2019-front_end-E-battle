import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

import { IoReturnUpBack } from 'react-icons/io5';

const NewGame: React.FC = () => {
  return (
    <Link to="/myGames" id="head">
      <IoReturnUpBack />
      <h2>Configuração</h2>
    </Link>
  );
};

export default NewGame;
