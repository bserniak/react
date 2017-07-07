import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {SearchableDelegateTable} from './searchableDelegateTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <SearchableDelegateTable />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.querySelector('#root'));