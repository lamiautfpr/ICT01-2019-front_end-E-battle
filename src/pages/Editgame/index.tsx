import React from 'react';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Editgame: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <div>
        <h3>Edição</h3>
      </div>
    </Container>
  );
};

export default Editgame;
