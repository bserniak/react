import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TrailTable } from './trailTable';
import { TrailRow } from './trailRow';
import { TrailCategoryRow } from './trailCategoryRow';
import { List } from './node_modules/material-ui/List';

describe('TrailTable', () => {
    it('should render table', () => {
        const status = Math.random();
        const trailRows = [ {'area': 'missouri', 'name': 'bestTrailEver', 'status': status, 'url': 'url/to/detail/page'} ]
        const wrapper = shallow(<TrailTable trails={trailRows}/>);
        expect(wrapper.containsAllMatchingElements([
                    <TrailCategoryRow area='missouri' key='missouri' />,
                    <TrailRow key='bestTrailEver' name='bestTrailEver' status={status} url='url/to/detail/page' />
        ])).to.equal(true);
    });
});