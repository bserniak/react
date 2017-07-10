import React, { Component } from 'react';
import { TrailRow } from './trailRow';
import { TrailCategoryRow } from './trailCategoryRow';
import {List} from './node_modules/material-ui/List';

const styles = {
  root: {
    flexWrap: 'wrap',
    background: '#607D8B'
  }
};

export class TrailTable extends Component {
    render() {
        var rows = [];
        var lastArea = null;
        this.props.trails.forEach(function(trail) {
            if (trail.area !== lastArea) {
                rows.push(<TrailCategoryRow area={trail.area} key={trail.area} />);
            }
            lastArea = trail.area;
            rows.push(<TrailRow key={trail.name} name={trail.name} status={trail.status} url={trail.url} />)
        }, this);
        return (
            <div style={styles.root}>
                <List>
                    {rows}
                </List>
            </div>
        );
    }
}