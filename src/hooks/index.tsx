import React from 'react';

import { AuthProvider } from './Auth';
import { GameProvider } from './Games';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <GameProvider>{children}</GameProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
