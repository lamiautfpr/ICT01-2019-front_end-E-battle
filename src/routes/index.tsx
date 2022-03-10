import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyGames from '../pages/MyGames';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/myGames" exact component={MyGames} />
    </Switch>
  );
};

export default Routes;
