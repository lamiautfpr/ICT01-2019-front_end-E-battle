/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useRef, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import { IoReturnUpBack } from 'react-icons/io5';
import { BsClipboard } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
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
import { ICreateGame, IQuestionProps } from '../../Types/ITypes';
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
  const history = useHistory();

  const [game, setGame] = useState<ICreateGame>({} as ICreateGame);
  const [indexq, setIndexq] = useState<number>(-1);
  const [indexOld, setIndexOld] = useState<number>(indexq);
  const [radioOptions, setRadioOptions] = useState<number>(5);
  const [rangeValue, setRangeValue] = useState<string>('90');
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [quests, setQuests] = useState<IQuestionProps[]>([]);

  const hadleData = (value: number) => {
    let hours = Math.floor(value);
    let min = value - hours;
    if (min >= 0.6) {
      hours += 1;
      min -= 0.6;
    }
    return `${hours}min${(min * 100).toFixed()}s`;
  };

  const handleDuplicate = useCallback(
    (data: IQuestionProps) => {
      setQuests([...quests.concat(data)]);
    },
    [quests],
  );
  const handleDelete = useCallback(
    (id: number) => {
      setQuests(quests.filter((q, i) => i !== id));
    },
    [quests],
  );

  const handleSubmit = useCallback(
    (data: ImodifiedGame, { reset }) => {
      formref.current?.setErrors({});
      const { name, questions } = data;
      const quest = quests.find((i, ind) => ind === indexq);
      questions.answer = radioOptions;
      questions.time = Number(rangeValue);

      if (indexq !== -1 && quest) {
        formref.current?.setFieldValue('questions.text', quest.text);
        formref.current?.setFieldValue(
          'questions.answers[0]',
          quest.answers[0],
        );
        formref.current?.setFieldValue(
          'questions.answers[1]',
          quest.answers[1],
        );
        formref.current?.setFieldValue(
          'questions.answers[2]',
          quest.answers[2],
        );
        formref.current?.setFieldValue(
          'questions.answers[3]',
          quest.answers[3],
        );
        formref.current?.setFieldValue('questions.time', quest.time);
        formref.current?.setFieldValue('questions.answer', quest.answer);
        setRadioOptions(quest.answer);
      } else {
        setQuests([...quests.concat(questions)]);
        reset();
        formref.current?.setFieldValue('name', name);
      }
      if (indexOld > -1 && questions.text !== quest?.text) {
        const cloneQuest = quests;
        const newData = {
          text: questions.text,
          answers: questions.answers,
          answer: questions.answer,
          time: questions.time,
        };

        cloneQuest[indexOld] = newData;

        setQuests(cloneQuest);
      }
      setGame({ name, questions: quests, category: 1, language: 1 });
      setIndexOld(indexq);
    },
    [indexOld, indexq, quests, radioOptions, rangeValue],
  );

  const handleCreateGame = useCallback(
    async (data: ICreateGame) => {
      await api
        .post('games/create', data, {
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then(response => {
          if (response) {
            history.push('/myGames');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    [access_token],
  );

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
            <button
              id="save"
              type="button"
              onClick={() => handleCreateGame(game)}
            >
              Salvar
              <FiSave />
            </button>
          </section>
        </Information>

        <Question radioOptions={radioOptions}>
          <h3>A Questão</h3>
          <h4>Texto da pergunta </h4>

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
              // eslint-disable-next-line react/no-array-index-key
              <div className="card" key={`${item.text}-${index}`}>
                <button
                  className="infoCard"
                  type="submit"
                  onClick={() => setIndexq(index)}
                >
                  <p>{item.text.substring(0, 10)} ...</p>
                </button>
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

            <button type="submit" id="addP" onClick={() => setIndexq(-1)}>
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
