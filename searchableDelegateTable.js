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
        var matchingDelegates = [];

        delegateInfo.forEach(function(delegate) {
            if(delegate.delegateEmpId == empId) {
                matchingDelegates.push(delegate)
            }
            
        }, this);

        this.setState({
            delegates: matchingDelegates
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

const delegateInfo = [
    {'empId': 100, 'applicationKey': '123456', delegateEmpId: 100},
    {'empId': 115, 'applicationKey': '789065', delegateEmpId: 100},
    {'empId': 100024, 'applicationKey': '356788', delegateEmpId: 115},
    {'empId': 100044, 'applicationKey': '235346', delegateEmpId: 100},
    {'empId': 100011, 'applicationKey': '346457', delegateEmpId: 115}
]