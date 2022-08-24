import React from 'react';
import { IToastMensagem } from '../../hooks/Toast';
import ToastBox from './ToastBox';

import { Container } from './styles';

interface IProps {
  mensagens: IToastMensagem[];
}
const Toast: React.FC<IProps> = ({ mensagens }) => {
  return (
    <Container>
      {mensagens.map((item, index, array) => {
        if (array.length > 6) {
          array.pop();
        }
        console.log(index);
        console.log(array);

        return <ToastBox key={item.id} mensagem={item} />;
      })}
    </Container>
  );
};

export default Toast;
