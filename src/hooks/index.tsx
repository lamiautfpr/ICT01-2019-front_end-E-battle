import React from 'react';

import { AuthProvider } from './Auth';
import { GameProvider } from './Games';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <GameProvider>{children}</GameProvider>
  </AuthProvider>
);

export default AppProvider;
