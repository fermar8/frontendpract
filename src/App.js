import React, {Component} from 'react';
import Navbar from './components/Navbar'
import {Switch, Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
  }
}

export default App;
