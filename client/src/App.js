import React from 'react';
import './App.css';
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import Home from './screens/Home/Home'
import MainMenu from './screens/MainMenu/MainMenu'
import AccountDetail from './screens/AccountDetail/AccountDetail'
import AccountEdit from './screens/AccountEdit/AccountEdit'
import RadioScreen from './screens/RadioScreen/RadioScreen'
import Favorites from './screens/Favorites'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/sign-in-user' component={SignIn} />
        <Route exact path='/users/create-users' component={SignUp} />
        <Route exact path="/users/favorites" component={Favorites} />
        <Route exact path='/users/:id' component={MainMenu} />
        <Route exact path='/users/:id/detail' component={AccountDetail}/>
        <Route exact path='/users/:id/edit' component={AccountEdit} />
        <Route exact path='/users/:id/:genre' component={RadioScreen} />
        
      </Switch>
    </div>
  );
}

export default App;
