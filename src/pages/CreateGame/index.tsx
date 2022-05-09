/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { IoReturnUpBack } from 'react-icons/io5';
import { BsClipboard } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { ImAttachment } from 'react-icons/im';
import { IoDuplicateOutline } from 'react-icons/io5';
import { FiTrash2 } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Filter from '../../components/Filter';
import NavBar from '../../components/NavBar';

import { Container, Information, ListColumn, Question } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/Auth';
import { IGameProps, IQuestionProps } from '../../Types/ITypes';
import Input from '../../components/Input';
import InputRef from '../../components/Input/InputRef';
import TextAreaRef from '../../components/Input/TextAreaRef';

interface ImodifiedGame {
  language: number;
  category: number;
  name: string;
  questions: IQuestionProps;
}

const Editgame: React.FC = () => {
  const { access_token } = useAuth();
  const formref = useRef<FormHandles>(null);

  const [game, setGame] = useState<IGameProps>({} as IGameProps);
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

  const [quests, setQuests] = useState<IQuestionProps[]>([]);

  const handleDuplicate = useCallback(
    (data: IQuestionProps) => {
      setQuests([...quests.concat(data)]);
    },
    [quests],
  );
  const handleDelete = useCallback(
    (id: number) => {
      // console.log(quests.filter((q, i) => i !== id))
      setQuests(quests.filter((q, i) => i !== id));
    },
    [quests],
  );

  const handleSubmit = useCallback(
    (data: ImodifiedGame) => {
      formref.current?.setErrors({});
      const { questions } = data;
      questions.answer = radioOptions;
      questions.time = Number(rangeValue);
      setQuests([...quests.concat(questions)]);
    },
    [quests, radioOptions, rangeValue],
  );

  // const handleApi = useCallback(() => {
  //   api.
  // }, []);

  return (
    <Container>
      <NavBar />
      <Link to="/myGames" id="head">
        <IoReturnUpBack />
        <h2>Edição</h2>
      </Link>
      <Form ref={formref} onSubmit={handleSubmit}>
        <Information>
          <h3>Informações </h3>
          <section>
            <div id="title-game">
              <InputRef name="name" placeholder="Titulo do jogo" type="text" />
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
          <TextAreaRef name="questions.text" />
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
                  <InputRef
                    name="questions.answers[0]"
                    type="text"
                    placeholder="Resposta A"
                  />
                </div>
              </div>
              <div>
                <div className="radio" onClick={() => setRadioOptions(2)} />
                <div className="response">
                  <InputRef
                    name="questions.answers[1]"
                    type="text"
                    placeholder="Resposta B"
                  />
                </div>
              </div>
              <div>
                <div className="radio" onClick={() => setRadioOptions(3)} />
                <div className="response">
                  <InputRef
                    name="questions.answers[2]"
                    type="text"
                    placeholder="Resposta C"
                  />
                </div>
              </div>
              <div>
                <div className="radio" onClick={() => setRadioOptions(4)} />
                <div className="response">
                  <InputRef
                    name="questions.answers[3]"
                    type="text"
                    placeholder="Resposta D"
                  />
                </div>
              </div>
            </div>
          </form>
          {/*  */}
          <h4>Tempo da pergunta</h4>
          <div className="range">
            <Input
              name="questions.time"
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
            {quests.map((item, index) => (
              <div className="card">
                <div className="infoCard">
                  <p>{item.text.substring(0, 10)} ...</p>
                </div>
                <div>
                  <button type="button" onClick={() => handleDuplicate(item)}>
                    Duplicar
                    <IoDuplicateOutline />
                  </button>
                  <button type="button" onClick={() => handleDelete(index)}>
                    Excluir
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}

            <button type="submit" id="addP">
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
      </Form>
    </Container>
  );
};

export default Editgame;
