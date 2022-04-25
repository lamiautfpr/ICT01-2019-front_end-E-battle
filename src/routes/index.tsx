import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Community from '../pages/Community';
import Editgame from '../pages/Editgame';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyGames from '../pages/MyGames';
import NewGame from '../pages/NewGame';

const Routes: React.FC = () => {
  return (
    // <Switch>
    //   <Route path="/" exact component={Main} />
    // </Switch>

    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/myGames" exact component={MyGames} />
      <Route path="/community" exact component={Community} />
      <Route path="/editGame" exact component={Editgame} />
      <Route path="/newGame" exact component={NewGame} />
    </Switch>
  );
};

export default Routes;
