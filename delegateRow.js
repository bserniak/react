import React, { Component } from 'react';
import IoAlertCircled from './node_modules/react-icons/lib/io/alert-circled';
import IoCloseCircled from './node_modules/react-icons/lib/io/close-circled';
import IoCheckmarkCircled from './node_modules/react-icons/lib/io/checkmark-circled';
import IoHelpCircled from './node_modules/react-icons/lib/io/help-circled';
import {ListItem} from './node_modules/material-ui/List';

export class DelegateRow extends Component {
    render() {
        var status;
        if(this.props.status == 0) {
            status = <IoCheckmarkCircled />
        }
        if(this.props.status == 1) {
            status = <IoAlertCircled />
        }
        if(this.props.status == 2) {
            status = <IoCloseCircled />
        }
        if(this.props.status == 3) {
            status = <IoHelpCircled />
        }
        return (
            <ListItem leftIcon={status} primaryText={<a href={'https://gorctrails.org' + this.props.url}>{this.props.name}</a> } />
        );
    }
}