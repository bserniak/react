import React, { Component } from 'react';
import { SearchBar } from './searchBar';
import { DelegateTable } from './delegateTable';

export class SearchableDelegateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: 0,
            delegates: []
        }
        this.handleTextInput = this.handleTextInput.bind(this);
        this.getDelegatesFromApi = this.getDelegatesFromApi.bind(this);
    }

    getDelegatesFromApi(empId) {
        this.setState({
            delegates: delegateInfo
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
                <SearchBar getDelegates={this.getDelegatesFromApi} onEmpIdTextInput={this.handleTextInput} empId={this.state.empId}/>
                <DelegateTable delegates={this.state.delegates}/>
            </div>
        );
    }
}

var delegateInfo = [
    {'empId': 100, 'applicationKey': '123456'},
    {'empId': 115, 'applicationKey': '789065'},
    {'empId': 100024, 'applicationKey': '356788'},
    {'empId': 100044, 'applicationKey': '235346'},
    {'empId': 100011, 'applicationKey': '346457'}
]