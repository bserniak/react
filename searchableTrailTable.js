import React, { Component } from 'react';
import { SearchBar } from './searchBar';
import { TrailTable } from './trailTable';
import { GetTrails } from './services';

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
                <TrailTable trails={this.state.trails}/>
            </div>
        );
    }
}