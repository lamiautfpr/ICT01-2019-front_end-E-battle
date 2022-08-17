import React from 'react';
import { FiXSquare } from 'react-icons/fi';
import { IToastMensagem, useToast } from '../../../hooks/Toast';

import { Container } from './styles';

interface IToastProps {
  mensagem: IToastMensagem;
}
const ToastBox: React.FC<IToastProps> = ({ mensagem }) => {
  const { removeToast } = useToast();
  return (
    <Container type={mensagem.type} temDescricao={Number(!!mensagem.descricao)}>
      {/* {icons[mensagem.type || 'info']} */}

      <div>
        <strong>{mensagem.titulo}</strong>
        {mensagem.descricao && <p>{mensagem.descricao}</p>}
      </div>
      <button onClick={() => removeToast(mensagem.id)} type="button">
        <FiXSquare size={18} />
      </button>
    </Container>
  );
};

export default ToastBox;
