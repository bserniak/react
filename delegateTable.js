import React, { Component } from 'react';
import { DelegateRow } from './delegateRow';

export class DelegateTable extends Component {
    render() {
        var rows = [];
        this.props.delegates.forEach(function(delegate) {
            rows.push(<DelegateRow key={delegate.empId} empId={delegate.empId} applicationKey={delegate.applicationKeys.join(',')} />)
        }, this);
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>EmpId</th>
                        <th>Application Guid</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}