import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
// import { ImageProps } from '../../myTypes/Images';
// import { SelectItem } from '../../myTypes/SelectItem';
// import { useToast } from './Toast';

export interface IUserProps {
  id: number;
  name: string;
  email: string;
  password: string;
  status: number;
  institution: string;
  city: string;
  workType: string;
  educationLevel: string;
}

interface IAuthState {
  access_token: string;
  // user: IUserProps;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthProviderData {
  access_token: string;
  // user: IUserProps;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUserProps): void;
}

// export const officesPermitted: number[] = [1, 2, 3];
const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  // const { addToast } = useToast();

  const [data, setData] = useState<IAuthState>(() => {
    const access_token = localStorage.getItem('@LAMIA:token');
    // const user = localStorage.getItem('@LAMIA:user');

    // if (access_token && user) {
    //   return { access_token, user: JSON.parse(user) };
    // }
    if (access_token) {
      return { access_token };
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

      localStorage.setItem('@LAMIA:token', access_token);
      // localStorage.setItem('@LAMIA:member', JSON.stringify(member));

      // setData({ access_token, member });
      setData({ access_token });
    } catch (error) {
      // addToast({
      //   type: 'error',
      //   title: 'Erro na autenticação',
      //   description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      // });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@LAMIA:token');
    // localStorage.removeItem('@LAMIA:member');
  }, []);

  const updateUser = useCallback(() => {
    setData({
      access_token: data.access_token,
      // member,
    });
    // localStorage.setItem('@LAMIA:member', JSON.stringify(member));
  }, [data.access_token]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        access_token: data.access_token,
        // member: data.member,
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
