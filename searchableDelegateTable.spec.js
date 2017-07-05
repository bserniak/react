import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { SearchableDelegateTable } from './searchableDelegateTable';
import { SearchBar } from './searchBar';
import { DelegateTable } from './delegateTable';

describe('SearchableDelegateTable', () => {
    it('should render SearchBar and DelegateTable', () => {
        const wrapper = shallow(<SearchableDelegateTable/>);
        expect(wrapper.containsAllMatchingElements([
          <SearchBar/>,
          <DelegateTable/>
        ])).to.equal(true);
    });
});