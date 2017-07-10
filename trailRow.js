import React, { Component } from 'react';
import IoAlertCircled from './node_modules/react-icons/lib/io/alert-circled';
import IoCloseCircled from './node_modules/react-icons/lib/io/close-circled';
import IoCheckmarkCircled from './node_modules/react-icons/lib/io/checkmark-circled';
import IoHelpCircled from './node_modules/react-icons/lib/io/help-circled';
import {ListItem} from './node_modules/material-ui/List';
import {green500} from './node_modules/material-ui/styles/colors';
import {red500} from './node_modules/material-ui/styles/colors';
import {yellow500} from './node_modules/material-ui/styles/colors';

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
            <ListItem leftIcon={mapping[this.props.status]} primaryText={<a href={'https://gorctrails.org'+this.props.url} 
            style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'Roboto, sans-serif' }}>{this.props.name}</a>} style={styles.root}/>
        );
    }
}