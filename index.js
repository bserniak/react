import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {SearchableDelegateTable} from './searchableDelegateTable';
import {grey500} from './node_modules/material-ui/styles/colors';
import {green500} from './node_modules/material-ui/styles/colors';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import darkBaseTheme from './node_modules/material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from './node_modules/material-ui/styles/getMuiTheme';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: grey500,
  },
  appBar: {
    height: 50,
  },
  listItem: {
    // leftIconColor: green500,
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <SearchableDelegateTable />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.querySelector('#root'));