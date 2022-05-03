import React from 'react';
import { IoDuplicateOutline, IoPlayOutline } from 'react-icons/io5';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';
import { IGameProps } from '../../Types/ITypes';
import { useAuth } from '../../hooks/Auth';

const CardGames: React.FC<Omit<IGameProps, 'id'>> = ({ name, questions }) => {
  // console.log(deletedDate.toString());
  const { user } = useAuth();
  return (
    <Container>
      <div id="top">
        <h1>{name}</h1>
        <ul>
          <li>
            <button type="button">
              Duplicar <IoDuplicateOutline />
            </button>
          </li>
          <li>
            <button type="button">
              Editar
              <FiEdit />
            </button>
          </li>
          <li>
            <button type="button" id="trash">
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
