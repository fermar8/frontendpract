import React, {Component} from 'react';
import Navbar from './components/Navbar'
import {Switch, Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/QuienesSomos';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/nosotros' component={About}/>
        </Switch>
    </div>
  );
  }
}

export default App;
