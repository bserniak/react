import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {SearchableTrailTable} from './searchableTrailTable';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
      <SearchableTrailTable />
    </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.querySelector('#root'));
  document.bgColor = '#B0BEC5'