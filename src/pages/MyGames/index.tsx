import React from 'react';
import NavBar from '../../components/NavBar';
import NavDashBoard from '../../components/NavDashBoard';

import { Container } from './styles';

const MyGames: React.FC = () => {
  return (
    <Container>
      <NavBar />
      {/* <NavDashBoard setPosition="myGame" /> */}
      <NavDashBoard setPosition="myGame" />
    </Container>
  );
};

export default MyGames;
