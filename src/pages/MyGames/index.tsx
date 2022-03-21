import React from 'react';
import CardGames from '../../components/CardGames';
import NavBar from '../../components/NavBar';
import NavDashBoard from '../../components/NavDashBoard';

import { Container } from './styles';

const MyGames: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <NavDashBoard setPosition="myGame" />
      <div>
        <CardGames />
        <CardGames />
        <CardGames />
        <CardGames />
      </div>
    </Container>
  );
};

export default MyGames;
