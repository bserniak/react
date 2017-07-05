import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { DelegateTable } from './delegateTable';
import { DelegateRow } from './delegateRow';

describe('DelegateTable', () => {
    it('should render table', () => {
        const delegateRows = [ {'empId': 100, 'applicationKey': '1234'}, {'empId': 115, 'applicationKey': '5678'} ]
        const wrapper = shallow(<DelegateTable delegates={delegateRows}/>);
        expect(wrapper.containsAllMatchingElements([
          <table>
            <thead>
            <tr>
                <th>EmpId</th>
                <th>Application Guid</th>
            </tr>
            </thead>
            <tbody>
                <DelegateRow empId={100} applicationKey='1234' />
                <DelegateRow empId={115} applicationKey='5678' />
            </tbody>
        </table>
        ])).to.equal(true);
    });
});