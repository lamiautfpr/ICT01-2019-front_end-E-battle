import React, { useEffect, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CardGames from '../../components/CardGames';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';
import NavDashBoard from '../../components/NavDashBoard';
import Search from '../../components/Search';
import { useAuth } from '../../hooks/Auth';
import { useGames } from '../../hooks/Games';
import api from '../../services/api';
import { IGameProps } from '../../Types/ITypes';

import { ButtonCreateGame, Container } from './styles';

const MyGames: React.FC = () => {
  const { games } = useGames();
  // const { access_token } = useAuth();
  // const [games, setGames] = useState<IGameProps[]>([]);
  // useEffect(() => {
  //   api
  //     .get('games', { headers: { Authorization: `Bearer ${access_token}` } })
  //     .then(response => {
  //       setGames(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [access_token]);

  return (
    <Container>
      <NavBar />
      <NavDashBoard setPosition="myGame" />
      <div id="line-arctions">
        <Search />
        <Filter />
        <ButtonCreateGame>
          <Link to="createGame">Criar Jogo</Link>
          <IoAdd />
        </ButtonCreateGame>
      </div>
      <div>
        {games.map(itens => {
          return (
            <CardGames
              id={itens.id}
              key={itens.id}
              name={itens.name}
              user={itens.user}
              category={itens.category}
              language={itens.language}
              questions={itens.questions}
              deletedDate={itens.deletedDate}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default MyGames;
