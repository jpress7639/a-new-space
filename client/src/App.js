import React from 'react';
import './App.css';
import Home from './screens/Home/Home'
import MainMenu from './screens/MainMenu/MainMenu'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/:id' component={MainMenu} />
      </Switch>
    </div>
  );
}

export default App;
