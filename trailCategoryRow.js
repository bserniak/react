import React, { Component } from 'react';
import Subheader from './node_modules/material-ui/Subheader';
import {blueGrey500} from './node_modules/material-ui/styles/colors';

export class TrailCategoryRow extends React.Component {
  render() {
    return (<Subheader style={{color: '#000000', background: '#CFD8DC', fontFamily: 'Roboto, sans-serif'}}>{this.props.area}</Subheader>);
  }
}