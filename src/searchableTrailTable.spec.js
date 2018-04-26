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
        const trails = [{'area': 'test', 'name': 'trail1', 'status': 1, 'url': 'url'}];
        const response = {'trails': trails};
        const trailsStub = stub().resolves(response);
        const setTrailsStub = stub();
        Services.GetTrails = trailsStub;
        const wrapper = shallow(<SearchableTrailTable/>);
        wrapper.instance().setTrails = setTrailsStub;
        
        const result = wrapper.instance().componentDidMount();
        
        result.then(res => {
            expect(trailsStub.calledOnce).to.equal(true);
            expect(setTrailsStub.calledOnce).to.equal(true);
            expect(setTrailsStub.calledWith(match.array.deepEquals(trails))).to.equal(true);
            done();
        });        
    });

    it('calls set state when setTrails is called', () => {
        const trails = [{'area': 'test', 'name': 'trail1', 'status': 1, 'url': 'url'}];
        const wrapper = shallow(<SearchableTrailTable/>);
        expect(wrapper.state().trails).to.eql([]);

        wrapper.instance().setTrails(trails);

        expect(wrapper.state().trails).to.deep.equal(trails);
    });
});