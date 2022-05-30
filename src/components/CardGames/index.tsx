import React, { useCallback, useEffect, useState } from 'react';
import { IoDuplicateOutline, IoPlayOutline } from 'react-icons/io5';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import { IGameProps } from '../../Types/ITypes';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import { useGames } from '../../hooks/Games';

interface IResponseGames
  extends Omit<
    IGameProps,
    'id' | 'user' | 'deletedDate' | 'language' | 'category'
  > {
  language: number;
  category: number;
}

const CardGames: React.FC<IGameProps> = ({ id, name, questions }) => {
  const { user } = useAuth();
  const { duplicateGame, deleteGame } = useGames();
  // const [newCard, setNewCard] = useState<IResponseGames>({} as IResponseGames);

  return (
    <Container>
      <div id="top">
        <h1>{name}</h1>
        <ul>
          <li>
            <button
              type="button"
              onClick={() =>
                duplicateGame({
                  name,
                  questions,
                  category: 1,
                  language: 1,
                })
              }
            >
              Duplicar <IoDuplicateOutline />
            </button>
          </li>
          <li>
            <Link to={`editGame?id=${id}`}>
              Editar
              <FiEdit />
            </Link>
          </li>
          <li>
            <button type="button" id="trash" onClick={() => deleteGame(id)}>
              Excluir
              <FiTrash2 />
            </button>
          </li>
        </ul>
      </div>
      <div id="border">
        <h2>SUB TITULO</h2>
        <div>
          <ul>
            <li>Autor: {user.name}</li>
            <li>Numero de perguntas: {questions.length}</li>
            <li>Nivél de dificuldade: Médio </li>
            <li>Ultima edição: 10/05/2000 15:10:54</li>
          </ul>
        </div>
      </div>
      <div id="buttons">
        <label>
          <input type="checkbox" />
          <span />
        </label>
        <button type="button">
          Vamos jogar <IoPlayOutline />
        </button>
      </div>
    </Container>
  );
};

export default CardGames;
