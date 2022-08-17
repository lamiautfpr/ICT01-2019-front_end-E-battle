import React from 'react';
import { IToastMensagem } from '../../hooks/Toast';
import ToastBox from './ToastBox';

// import { Container } from './styles';
interface IProps {
  mensagens: IToastMensagem[];
}
const Toast: React.FC<IProps> = ({ mensagens }) => {
  return (
    <div>
      {mensagens.map(item => (
        <ToastBox key={item.id} mensagem={item} />
      ))}
    </div>
  );
};

export default Toast;
