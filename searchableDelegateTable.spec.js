import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { stub, spy, match } from 'sinon';
import { SearchableTrailTable } from './searchableTrailTable';
import { TrailTable } from './trailTable';
import * as Services from './services';

describe('SearchableTrailTable', () => {
    it('should render TrailTable', () => {
        const wrapper = shallow(<SearchableTrailTable/>);
        expect(wrapper.containsAllMatchingElements([
          <TrailTable/>
        ])).to.equal(true);
    });

    it('sets state from results of service', (done) => {
        const response = [{'empId': 100, 'applicationKeys': ['1234']}];
        const delegatesStub = stub().resolves(response);
        const setDelegatesStub = stub();
        Services.GetDelegates = delegatesStub;
        const wrapper = shallow(<SearchableTrailTable/>);
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

    it('calls set state when setTrails is called', () => {
        const delegates = [{'empId': 100, 'applicationKeys': ['1234']}];
        const wrapper = shallow(<SearchableTrailTable/>);
        expect(wrapper.state().delegates).to.eql([]);

        wrapper.instance().setDelegates(delegates);

        expect(wrapper.state().delegates).to.deep.equal(delegates);
    });
});