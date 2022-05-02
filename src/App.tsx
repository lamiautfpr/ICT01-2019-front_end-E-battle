import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
};

export default App;
