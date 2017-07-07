import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { stub, spy, match } from 'sinon';
import { SearchableDelegateTable } from './searchableDelegateTable';
import { SearchBar } from './searchBar';
import { DelegateTable } from './delegateTable';
import * as Services from './services';

describe('SearchableDelegateTable', () => {
    it('should render SearchBar and DelegateTable', () => {
        const wrapper = shallow(<SearchableDelegateTable/>);
        expect(wrapper.containsAllMatchingElements([
          <SearchBar/>,
          <DelegateTable/>
        ])).to.equal(true);
    });

    it('sets state from results of service', (done) => {
        const response = [{'empId': 100, 'applicationKeys': ['1234']}];
        const delegatesStub = stub().resolves(response);
        const setDelegatesStub = stub();
        Services.GetDelegates = delegatesStub;
        const wrapper = shallow(<SearchableDelegateTable/>);
        wrapper.instance().setDelegates = setDelegatesStub;
        
        const result = wrapper.instance().getDelegatesFromApi(100);
        
        result.then(res => {
            expect(delegatesStub.calledOnce).to.equal(true);
            expect(delegatesStub.calledWith(100)).to.equal(true);
            expect(setDelegatesStub.calledOnce).to.equal(true);
            expect(setDelegatesStub.calledWith(match.array.deepEquals(response))).to.equal(true);
            done();
        });        
    });

    it('calls set state when setDelegates is called', () => {
        const delegates = [{'empId': 100, 'applicationKeys': ['1234']}];
        const wrapper = shallow(<SearchableDelegateTable/>);
        expect(wrapper.state().delegates).to.eql([]);

        wrapper.instance().setDelegates(delegates);

        expect(wrapper.state().delegates).to.deep.equal(delegates);
    });

    it('calls set state when handleTextInput is called', () => {
        const empId = Math.random;
        const wrapper = shallow(<SearchableDelegateTable/>);
        expect(wrapper.state().empId).to.equal(100);

        wrapper.instance().handleTextInput(empId);

        expect(wrapper.state().empId).to.equal(empId);
    });
});