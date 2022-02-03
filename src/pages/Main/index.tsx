import React from 'react';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
      <NavBar />
    </Container>
  );
};

export default Main;
