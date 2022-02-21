import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default Routes;
