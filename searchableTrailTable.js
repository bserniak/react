import React, { Component } from 'react';
import { TrailTable } from './trailTable';
import { GetTrails } from './services';
import AppBar from 'material-ui/AppBar'

const styles = {
  root: {
    flexWrap: 'wrap',
    background: '#37474F',
  }
};

export class SearchableTrailTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: []
        }
        this.setTrails = this.setTrails.bind(this);
    }

    componentDidMount() {
        return GetTrails().then(trails => {
            this.setTrails(trails.trails);
        });        
    }

    setTrails(trails) {
        this.setState({
            trails: trails
        });
    }

    render() {
        return (
            <div>
                <AppBar style={styles.root} showMenuIconButton={false} title="G.O.R.C. Trail Statuses" />
                <TrailTable trails={this.state.trails}/>
            </div>
        );
    }
}