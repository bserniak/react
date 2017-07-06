import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { DelegateRow } from './delegateRow';

describe('DelegateRow', () => {
    it('should render row', () => {
        const wrapper = shallow(<DelegateRow empId={100} applicationKey={'key'}/>);
        expect(wrapper.containsAllMatchingElements([
                <td>{100}</td>,
                <td>{'key'}</td>
        ])).to.equal(true);
    });
});