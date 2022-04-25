/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { IoReturnUpBack } from 'react-icons/io5';
import { BsClipboard } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ImAttachment } from 'react-icons/im';
import { IoDuplicateOutline } from 'react-icons/io5';
import { FiTrash2 } from 'react-icons/fi';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';

import { Container, Information, ListColumn, Question } from './styles';

const Editgame: React.FC = () => {
  const [radioOptions, setRadioOptions] = useState<number>(5);
  const [rangeValue, setRangeValue] = useState<string>('90');
  const [listVisible, setListVisible] = useState<boolean>(false);

  const hadleData = (value: number) => {
    let hours = Math.floor(value);
    let min = value - hours;
    if (min >= 0.6) {
      hours += 1;
      min -= 0.6;
    }
    return `${hours}min${(min * 100).toFixed()}s`;
  };
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
          <div id="a">
            <div>
              <div className="radio" onClick={() => setRadioOptions(1)} />
              <div className="response">
                <input type="text" placeholder="Resposta A" />
              </div>
            </div>
            <div>
              <div className="radio" onClick={() => setRadioOptions(2)} />
              <div className="response">
                <input type="text" placeholder="Resposta B" />
              </div>
            </div>
            <div>
              <div className="radio" onClick={() => setRadioOptions(3)} />
              <div className="response">
                <input type="text" placeholder="Resposta C" />
              </div>
            </div>
            <div>
              <div className="radio" onClick={() => setRadioOptions(4)} />
              <div className="response">
                <input type="text" placeholder="Resposta D" />
              </div>
            </div>
          </div>
        </form>
        {/*  */}
        <h4>Tempo da pergunta</h4>
        <div className="range">
          <input
            type="range"
            min={1}
            max={180}
            defaultValue={90}
            onChange={event => setRangeValue(event.target.value)}
          />
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <p>
          Tempo: {}
          <span>{hadleData(Number.parseInt(rangeValue, 10) / 60)}</span>
        </p>
      </Question>
      <ListColumn setVisible={listVisible}>
        <section>
          <div id="outSide" onClick={() => setListVisible(false)} />
          {/* >>> */}
          <div className="card">
            <div className="infoCard">
              <p>1º pergunta ...</p>
            </div>
            <div>
              <button type="button">
                Duplicar
                <IoDuplicateOutline />
              </button>
              <button type="button">
                Excluir
                <FiTrash2 />
              </button>
            </div>
          </div>
          {/* >>> */}
          {/* >>> */}
          <div className="card">
            <div className="infoCard">
              <p>1º pergunta ...</p>
            </div>
            <div>
              <button type="button">
                Duplicar
                <IoDuplicateOutline />
              </button>
              <button type="button">
                Excluir
                <FiTrash2 />
              </button>
            </div>
          </div>
          {/* >>> */}
          {/* >>> */}
          <div className="card">
            <div className="infoCard">
              <p>1º pergunta ...</p>
            </div>
            <div>
              <button type="button">
                Duplicar
                <IoDuplicateOutline />
              </button>
              <button type="button">
                Excluir
                <FiTrash2 />
              </button>
            </div>
          </div>
          {/* >>> */}
          {/* >>> */}
          <div className="card">
            <div className="infoCard">
              <p>1º pergunta ...</p>
            </div>
            <div>
              <button type="button">
                Duplicar
                <IoDuplicateOutline />
              </button>
              <button type="button">
                Excluir
                <FiTrash2 />
              </button>
            </div>
          </div>
          {/* >>> */}

          <button type="button" id="addP">
            Nova pergunta
          </button>
        </section>
        <button
          type="button"
          id="butonList"
          onClick={() => setListVisible(true)}
        >
          <span>Lista</span>
          <BsClipboard />
        </button>
      </ListColumn>
    </Container>
  );
};

export default Editgame;
