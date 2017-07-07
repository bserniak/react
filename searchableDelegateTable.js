import React, { Component } from 'react';
import { SearchBar } from './searchBar';
import { DelegateTable } from './delegateTable';
import { GetDelegates } from './services';

export class SearchableDelegateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 100,
            trails: []
        }
        this.handleTextInput = this.handleTextInput.bind(this);
        this.setDelegates = this.setDelegates.bind(this);
        this.getDelegatesFromApi = this.getDelegatesFromApi.bind(this);
    }

    componentDidMount() {
        return GetDelegates().then(trails => {
            this.setDelegates(trails.trails);
        });        
    }
    getDelegatesFromApi(empId) {
        return GetDelegates(empId).then(trails => {
            this.setDelegates(trails.trails);
        });
    }

    setDelegates(trails) {
        this.setState({
            trails: trails
        });
    }

    handleTextInput(input) {
        this.setState({
            empId: input
        });
    }

    render() {
        return (
            <div>
                {/*<SearchBar getDelegates={this.getDelegatesFromApi} onEmpIdTextInput={this.handleTextInput} empId={this.state.empId}/>*/}
                <DelegateTable delegates={this.state.trails}/>
            </div>
        );
    }
}