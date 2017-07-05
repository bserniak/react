import React, { Component } from 'react';

export class DelegateRow extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.empId}</td>
                    <td>{this.props.applicationKey}</td>
                </tr>
            </div>
        );
    }
}