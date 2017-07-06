import React, { Component } from 'react';
import { SearchBar } from './searchBar';
import { DelegateTable } from './delegateTable';
import { GetDelegates } from './services';

export class SearchableDelegateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 100,
            delegates: []
        }
        this.handleTextInput = this.handleTextInput.bind(this);
        this.setDelegates = this.setDelegates.bind(this);
        this.getDelegatesFromApi = this.getDelegatesFromApi.bind(this);
    }

    getDelegatesFromApi(empId) {
        return GetDelegates(empId).then(peeps => {
            this.setDelegates(peeps);
        });
    }

    setDelegates(peeps) {
        this.setState({
            delegates: peeps
        });
    }

    handleTextInput(input) {
        this.setState({
            empId: input
        });
    }

    render() {
        const delegatesForEmployee = this.state.delegates;
        const currentEmpId = this.state.empId;
        return (
            <div>
                <SearchBar getDelegates={this.getDelegatesFromApi} onEmpIdTextInput={this.handleTextInput} empId={currentEmpId}/>
                <DelegateTable delegates={delegatesForEmployee}/>
            </div>
        );
    }
}