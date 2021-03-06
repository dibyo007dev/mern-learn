import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
// import DispWIn from './components/dispWIn';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <div className="App">
          <AppNavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
