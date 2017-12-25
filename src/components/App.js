import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}
