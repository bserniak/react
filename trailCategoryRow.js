import React, { Component } from 'react';
import {ListItem} from './node_modules/material-ui/List';

export class TrailCategoryRow extends React.Component {
  render() {
    return (<ListItem primaryText={this.props.area} />);
  }
}