import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Card from './Card';

console.log(shallow(<Card />));
it('tests for Card shallow rendering', () => {
    
    expect(shallow(<Card />).length).toMatchSnapshot();
});