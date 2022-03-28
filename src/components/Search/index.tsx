import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <input type="search" placeholder="Pesquisa" />
      <button type="button">
        <IoSearchOutline />
      </button>
    </Container>
  );
};

export default Search;
