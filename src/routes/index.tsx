import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Community from '../pages/Community';
// import Editgame from '../pages/Editgame';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyGames from '../pages/MyGames';
import NewGame from '../pages/NewGame';
import CreateGame from '../pages/CreateGame';
import Play from '../pages/Play';

const Routes: React.FC = () => {
  return (
    // <Switch>
    //   <Route path="/" exact component={Main} />
    // </Switch>

    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/myGames" exact component={MyGames} isPrivate />
      <Route path="/community" exact component={Community} isPrivate />
      {/* <Route path="/editGame" exact component={Editgame} isPrivate /> */}
      <Route path="/play" exact component={Play} />
      <Route path="/createGame" exact component={CreateGame} isPrivate />
      <Route path="/newGame" exact component={NewGame} isPrivate />
    </Switch>
  );
};

export default Routes;
