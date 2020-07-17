import React from 'react';
import './App.css';
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Home from './screens/Home/Home'
import MainMenu from './screens/MainMenu/MainMenu'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/create-users' component={SignUp} />
        <Route exact path='/users/:id' component={MainMenu} />
      </Switch>
    </div>
  );
}

export default App;
