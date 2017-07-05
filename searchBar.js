import React, { Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmpIdInputChange = this.handleEmpIdInputChange.bind(this);
    }
    handleClick(e) {
        this.props.getDelegates(this.props.empId);
    }

    handleEmpIdInputChange(e) {
        this.props.onEmpIdTextInput(e.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="EmpId..." value={this.props.empId} onChange={this.handleEmpIdInputChange} />
                    <button onClick={this.handleClick}>Find Delegates</button>
                </form>
            </div>
        );
    }
}