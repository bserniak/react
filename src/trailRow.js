import React, { Component } from 'react';
import IoAlertCircled from 'react-icons/lib/io/alert-circled';
import IoCloseCircled from 'react-icons/lib/io/close-circled';
import IoCheckmarkCircled from 'react-icons/lib/io/checkmark-circled';
import IoHelpCircled from 'react-icons/lib/io/help-circled';
import {ListItem} from './node_modules/material-ui/List';
import {green500} from './node_modules/material-ui/styles/colors';
import {red500} from './node_modules/material-ui/styles/colors';
import {yellow500} from './node_modules/material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    flexWrap: 'wrap',
    background: '#607D8B',
  }
};

export class TrailRow extends Component {
    render() {
        var mapping = {
            0: <IoCheckmarkCircled style={{color: '#76FF03'}}/>,
            1: <IoAlertCircled style={{color: '#FFC107'}}/>,
            2: <IoCloseCircled style={{color: '#FF5722'}}/>,
            3: <IoHelpCircled style={{color: '#BDBDBD'}}/>
        };

        return (
            <Paper style={styles.root} rounded={true} zDepth={5} >
                <ListItem leftIcon={mapping[this.props.status]} primaryText={<a href={'https://gorctrails.org' + this.props.url} 
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>{this.props.name}</a>}/>
            </Paper>
        );
    }
}