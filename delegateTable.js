import React, { Component } from 'react';
import { DelegateRow } from './delegateRow';
import { TrailCategoryRow } from './trailCategoryRow';
import {List} from './node_modules/material-ui/List';

export class DelegateTable extends Component {
    render() {
        var rows = [];
        var lastArea = null;
        this.props.delegates.forEach(function(delegate) {
            if (delegate.area !== lastArea) {
                rows.push(<TrailCategoryRow area={delegate.area} key={delegate.area} />);
            }
            lastArea = delegate.area;
            rows.push(<DelegateRow key={delegate.name} name={delegate.name} status={delegate.status} url={delegate.url} />)
        }, this);
        return (
            <div>
                <List>
                    {rows}
                </List>
            </div>
        );
    }
}