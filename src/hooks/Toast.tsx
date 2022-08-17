import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/Toast';

export interface IToastMensagem {
  id: string;
  type?: 'sucesso' | 'erro' | 'info';
  titulo: string;
  descricao?: string;
}

interface IToastContextProps {
  addToast(memnsagem: Omit<IToastMensagem, 'id'>): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<IToastContextProps>(
  {} as IToastContextProps,
);

const ToastProvider: React.FC = ({ children }) => {
  const [mensagens, setMensagens] = useState<IToastMensagem[]>([]);

  const addToast = useCallback(
    ({ type, titulo, descricao }: Omit<IToastMensagem, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        titulo,
        descricao,
      };
      setMensagens(mensagensVelhas => [...mensagensVelhas, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMensagens(state => state.filter(memnsagem => memnsagem.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer mensagens={mensagens} />
    </ToastContext.Provider>
  );
};

function useToast(): IToastContextProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
