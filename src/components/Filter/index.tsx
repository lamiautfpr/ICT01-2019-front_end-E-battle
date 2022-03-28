import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, ListItens } from './styles';

const Filter: React.FC = () => {
  const [showFIlter, setShowFIlter] = useState<boolean>(false);
  const itens = [
    { id: 1, name: ' Categoria 1' },
    { id: 2, name: ' Categoria 2' },
    { id: 3, name: ' Categoria 3' },
    { id: 4, name: ' Categoria 4' },
    { id: 5, name: ' Categoria 5' },
  ];
  return (
    <>
      <Container onMouseEnter={() => setShowFIlter(true)}>
        <p>Filtrar</p>
        <IoIosArrowDown />
      </Container>
      <ListItens
        setFilter={showFIlter}
        onMouseLeave={() => setShowFIlter(false)}
      >
        <ul>
          {itens.map(category => (
            <div key={category.id}>
              <li>
                {category.name}
                <MdKeyboardArrowRight />
              </li>
            </div>
          ))}
        </ul>
      </ListItens>
    </>
  );
};

export default Filter;
