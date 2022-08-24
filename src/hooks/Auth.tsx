import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { IUserProps } from '../Types/ITypes';
import { useToast } from './Toast';
// import { ImageProps } from '../../myTypes/Images';
// import { SelectItem } from '../../myTypes/SelectItem';
// import { useToast } from './Toast';

interface IAuthState {
  access_token: string;
  user: IUserProps;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthProviderData {
  access_token: string;
  user: IUserProps;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUserProps): void;
}

// export const officesPermitted: number[] = [1, 2, 3];
const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  // const { addToast } = useToast();

  const { addToast } = useToast();

  const [data, setData] = useState<IAuthState>(() => {
    const access_token = localStorage.getItem('@LAMIA:token');
    const user = localStorage.getItem('@LAMIA:user');

    if (access_token && user) {
      return { access_token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
      });
      const { access_token } = response.data;

      const responseUser = await api.get('users/logged', {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const user = responseUser.data;

      localStorage.setItem('@LAMIA?:token', access_token);
      localStorage.setItem('@LAMIA:user', JSON.stringify(user));

      // setData({ access_token, member });
      setData({ access_token, user });
    } catch (error) {
      // addToast({
      //   titulo: 'Erro na autenticação',
      //   type: 'erro',
      //   descricao: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      // });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LAMIA:token');
    localStorage.removeItem('@LAMIA:user');
  }, []);

  const updateUser = useCallback(() => {
    setData({
      access_token: data.access_token,
      user: data.user,
      // member,
    });
    localStorage.setItem('@LAMIA:user', JSON.stringify(data.user));
  }, [data.access_token, data.user]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        access_token: data.access_token,
        user: data.user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthProviderData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Usou Auth sem a inicialização do AuthProvider');
  }

  return context;
}
