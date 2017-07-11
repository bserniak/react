import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TrailRow } from './trailRow';
import {ListItem} from './node_modules/material-ui/List';

describe('TrailRow', () => {
    it('should render row', () => {
        const wrapper = shallow(<TrailRow key='trail1' name='trail1' status='1' url='url' />);
        expect(wrapper.containsAllMatchingElements([
                <ListItem />
        ])).to.equal(true);
    });
});