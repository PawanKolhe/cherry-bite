import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import logo from './assets/images/CherryBite-Logo.svg';
import gift1 from './assets/images/gift1.svg';
import gift2 from './assets/images/gift2.svg';
import gift3 from './assets/images/gift3.svg';
import christmasTree from './assets/images/christmas-tree.svg';
import './App.scss';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Videos from './pages/Videos/Videos';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';
import Saved from './pages/Saved/Saved';

import Nav from './components/Nav/Nav';
import FoodJoke from './components/FoodJoke/FoodJoke';

const alertOptions = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <Provider template={AlertTemplate} {...alertOptions}>
      <div className="App">
        
        <Router>
          <header className="App-header">
            <img className="App-logo" src={logo} alt="logo" />
            <p className="App-subtitle">Find the Perfect Holiday Recipe</p>
            <Nav />
          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/videos" exact component={Videos} />
            <Route path="/random" exact component={RecipeDetail} />
            <Route path="/recipe/:id" exact component={RecipeDetail} />
            <Route path="/saved" exact component={Saved} />
          </Switch>

          <FoodJoke />
        </Router>

        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
          <div className="snowflake">
          ❅
          </div>
          <div className="snowflake">
          ❆
          </div>
          <div className="snowflake">
          ❄
          </div>
        </div>

        <footer className="footer">
          <img className="gift1" src={gift1} alt="gift 1" />
          <img className="gift2" src={gift2} alt="gift 2" />
          <img className="gift3" src={gift3} alt="gift 3" />
          <img className="christmasTree" src={christmasTree} alt="christmas tree" />
        </footer>
        
      </div>
    </Provider>
  );
}

export default App;
