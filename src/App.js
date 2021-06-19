import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path ="/login" component = {Login} >
            {/* <Login /> */}
            </Route>
          </Switch>
          </Router>
      </div>
  );
}

export default App;
