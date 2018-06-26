import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header Component', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Header className="header" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<Header />).find('header.header').exists()).toBe(true)
    })
});