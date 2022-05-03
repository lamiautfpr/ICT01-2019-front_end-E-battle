import React from 'react';
import CardGames from '../../components/CardGames';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';
import NavDashBoard from '../../components/NavDashBoard';
import Search from '../../components/Search';

import { Container } from './styles';
//
const Community: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <NavDashBoard setPosition="community" />
      <div id="line-arctions">
        <Search />
        <Filter />
      </div>
      <div>
        {/* <CardGames />
        <CardGames />
        <CardGames />
        <CardGames /> */}
      </div>
    </Container>
  );
};

export default Community;
