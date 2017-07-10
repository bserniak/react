import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { TrailRow } from './trailRow';

describe('TrailRow', () => {
    it('should render row', () => {
        const wrapper = shallow(<TrailRow empId={100} applicationKey={'key'}/>);
        expect(wrapper.containsAllMatchingElements([
                <td>{100}</td>,
                <td>{'key'}</td>
        ])).to.equal(true);
    });
});