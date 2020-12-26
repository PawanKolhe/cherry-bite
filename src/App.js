import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from './assets/images/cherry.png';
import './App.scss';

import Home from './pages/Home/Home';

import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      
      <Router>
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <h1>Cherry Bite - Holiday Recipies</h1>
          <Nav />
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
