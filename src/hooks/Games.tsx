import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { IGameProps } from '../Types/ITypes';
import { useAuth } from './Auth';

interface IPostGames
  extends Omit<
    IGameProps,
    'id' | 'user' | 'deletedDate' | 'language' | 'category'
  > {
  language: number;
  category: number;
}

interface IGameProviderData {
  games: IGameProps[];
  // game: IGameProps;
  duplicateGame(gameProps: IPostGames): void;
  deleteGame(id: number): void;
}
const GameContext = createContext<IGameProviderData>({} as IGameProviderData);

export const GameProvider: React.FC = ({ children }) => {
  const { access_token } = useAuth();

  const [data, setData] = useState<IGameProps[]>([]);
  // const [game, setGame] = useState<IGameProps>({} as IGameProps);
  useEffect(() => {
    api
      .get('games', { headers: { Authorization: `Bearer ${access_token}` } })
      .then(response => {
        setData([...response.data]);
      });
  }, [access_token]);

  const duplicateGame = useCallback(
    async ({ category, language, name, questions }: IPostGames) => {
      try {
        const response = await api.post(
          'games/create',
          { category, language, name, questions },
          {
            headers: { Authorization: `Bearer ${access_token}` },
          },
        );

        setData([...data.concat(response.data)]);
      } catch (error) {
        // console.log(error);
      }
    },
    [access_token, data],
  );

  const deleteGame = useCallback(
    async id => {
      try {
        await api.delete(`games/${id}`, {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        setData([...data.filter(i => i.id !== id)]);
      } catch (error) {
        // console.log(error);
      }
    },
    [access_token, data],
  );

  return (
    <GameContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        duplicateGame,
        deleteGame,
        games: data,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGames(): IGameProviderData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('Usou Auth sem a inicialização do AuthProvider');
  }

  return context;
}
