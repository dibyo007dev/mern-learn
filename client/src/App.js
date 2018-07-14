import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import DispWIn from './components/dispWIn'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
        <DispWIn />
      </div>
    );
  }
}

export default App;
