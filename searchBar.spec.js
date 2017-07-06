import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { SearchBar } from './searchBar';

describe('SearchBar', () => {
    it('should render with input and button', () => {
        const wrapper = shallow(<SearchBar/>);
        expect(wrapper.containsAllMatchingElements([
                <input type="text" placeholder="EmpId..." />,
                <button type="button">Find Delegates</button>
        ])).to.equal(true);
    });

    it('should call getDelegates from props', () => {
        const getDelegatesSpy = spy();
        const testEmpId = Math.random();
        const wrapper = shallow(<SearchBar getDelegates={getDelegatesSpy} empId={testEmpId}/>);
        const findDelegatesButton = wrapper.find('button');

        findDelegatesButton.simulate('click');

        expect(getDelegatesSpy.calledOnce).to.equal(true);
        expect(getDelegatesSpy.calledWith(testEmpId)).to.equal(true);
    });

    it('should call onEmpIdTextInput when input changes', () => {
        const empIdValue = Math.random();
        const inputSpy = spy();
        const wrapper = shallow(<SearchBar empId={empIdValue} onEmpIdTextInput={inputSpy}/>);
        const empIdInput = wrapper.find('input');

        empIdInput.simulate('change', { target: { value: empIdValue } })

        expect(inputSpy.calledOnce).to.equal(true);
        expect(inputSpy.calledWith(empIdValue)).to.equal(true);
    });
});