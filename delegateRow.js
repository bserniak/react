import React, { Component } from 'react';
import IoAlertCircled from './node_modules/react-icons/lib/io/alert-circled';
import IoCloseCircled from './node_modules/react-icons/lib/io/close-circled';
import IoCheckmarkCircled from './node_modules/react-icons/lib/io/checkmark-circled';
import IoHelpCircled from './node_modules/react-icons/lib/io/help-circled';
import {ListItem} from './node_modules/material-ui/List';
import {green500} from './node_modules/material-ui/styles/colors';
import {red500} from './node_modules/material-ui/styles/colors';
import {yellow500} from './node_modules/material-ui/styles/colors';
import {grey500} from './node_modules/material-ui/styles/colors';

export class DelegateRow extends Component {
    render() {
        var mapping = {
            0: <IoCheckmarkCircled style={{color: green500}}/>,
            1: <IoAlertCircled style={{color: yellow500}}/>,
            2: <IoCloseCircled style={{color: red500}}/>,
            3: <IoHelpCircled style={{color: grey500}}/>
        };

        return (
            <ListItem leftIcon={mapping[this.props.status]} primaryText={<a href={'https://gorctrails.org'+this.props.url} style={{ color: 'inherit', textDecoration: 'none' }}>{this.props.name}</a>}/>
        );
    }
}