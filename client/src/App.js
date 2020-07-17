import React from 'react';
import './App.css';
import Home from './screens/MainMenu/MainMenu'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={SignIn} />
        <Route exact path='/create-users' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
