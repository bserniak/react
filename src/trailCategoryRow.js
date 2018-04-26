import React, { Component } from 'react';
import Subheader from './node_modules/material-ui/Subheader';
import {blueGrey500} from './node_modules/material-ui/styles/colors';
import Paper from 'material-ui/Paper';
const styles = {
  root: {
    flexWrap: 'wrap',
    background: '#607D8B'
  }
};

export class TrailCategoryRow extends React.Component {
  render() {
    return (
    <Paper style={styles.root} rounded={true} zDepth={5}>
      <Subheader style={{color: '#000000', background: '#CFD8DC', fontSize:'115%', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif'}}>{this.props.area}</Subheader>
    </Paper>);
  }
}