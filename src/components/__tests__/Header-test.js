import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../Header';

describe('Header Component', () => {

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<Header />).find('header.header').exists()).toBe(true)
    })
});