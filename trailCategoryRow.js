import React, { Component } from 'react';
import {ListItem} from './node_modules/material-ui/List';
import {blueGrey500} from './node_modules/material-ui/styles/colors';
import muiThemeable from './node_modules/material-ui/styles/muiThemeable';

export class TrailCategoryRow extends React.Component {
  render() {
    return (<ListItem primaryText={this.props.area} style={{color: blueGrey500}} />);
  }
}