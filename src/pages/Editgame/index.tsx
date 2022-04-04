/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { IoReturnUpBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ImAttachment } from 'react-icons/im';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';

import { Container, Information, ListColumn, Question } from './styles';

const Editgame: React.FC = () => {
  const [radioOptions, setRadioOptions] = useState<number>(1);

  return (
    <Container>
      <NavBar />
      <Link to="/myGames" id="head">
        <IoReturnUpBack />
        <h2>Edição</h2>
      </Link>

      <Information>
        <h3>Informações</h3>
        <section>
          <div id="title-game">
            <input placeholder="Titulo do jogo" type="text" />
          </div>
          <Filter />
          <button id="save" type="button">
            Salvar
            <FiSave />
          </button>
        </section>
      </Information>
      <Question radioOptions={radioOptions}>
        <h3>A Questão</h3>
        <h4>Texto da pergunta</h4>
        <textarea />
        <div id="dropdown">
          <button type="button">
            Anexar imagem
            <ImAttachment />
          </button>
        </div>
        <h4>Alternativas</h4>
        {/*  */}
        <form id="alternatives">
          <div>
            <div>
              <div className="radio" onClick={() => setRadioOptions(1)} />
              <input type="text" />
            </div>
            <div>
              <div className="radio" />
              <input type="text" />
            </div>
            {/* <div>
              <div className="radio">
                <input type="radio" name="a" />
              </div>
              <input type="text" />
            </div> */}
            {/* <div>
              <input type="radio" className="radio" />
              <input type="text" />
            </div> */}
          </div>
        </form>
        {/*  */}
        <h4>Tempo da pergunta</h4>
        <input type="range" />
        <p>
          Tempo: <span>1min30s</span>
        </p>
      </Question>
    </Container>
  );
};

export default Editgame;
