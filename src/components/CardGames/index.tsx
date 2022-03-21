import React from 'react';
import { IoDuplicateOutline, IoPlayOutline } from 'react-icons/io5';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { Container } from './styles';

const CardGames: React.FC = () => {
  return (
    <Container>
      <div id="top">
        <h1>CC25E-22</h1>
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
        <h2>Temas das perguntas</h2>
        <div>
          <ul>
            <li>Autor: Nome do autor</li>
            <li>Numero de perguntas: 30</li>
            <li>Nivél de dificuldade: Médio </li>
            <li>Ultima edição: 31/02/2022 ás 8h57</li>
          </ul>
        </div>
      </div>
      <div id="buttons">
        <button type="button">
          Vamos jogar <IoPlayOutline />
        </button>
      </div>
    </Container>
  );
};

export default CardGames;
