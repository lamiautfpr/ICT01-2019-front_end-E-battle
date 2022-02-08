import React from 'react';
import NavBar from '../../components/NavBar';
import Wave from '../../assets/wave.png';
import Blob from '../../assets/blob.png';

import { Container, Central } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Central>
        <div>
          <h1>Bem vindo</h1>
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.{' '}
          </p>
          <button type="button">Jogar</button>
        </div>
        <img src={Blob} alt="" />
      </Central>
      {/* <img src={Wave} alt="" /> */}
    </Container>
  );
};

export default Main;
