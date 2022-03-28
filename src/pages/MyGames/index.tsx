import React from 'react';
import { IoAdd } from 'react-icons/io5';
import CardGames from '../../components/CardGames';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';
import NavDashBoard from '../../components/NavDashBoard';
import Search from '../../components/Search';

import { ButtonCreateGame, Container } from './styles';

const MyGames: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <NavDashBoard setPosition="myGame" />
      <div id="line-arctions">
        <Search />
        <Filter />
        <ButtonCreateGame>
          Criar Jogo
          <IoAdd />
        </ButtonCreateGame>
      </div>
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
