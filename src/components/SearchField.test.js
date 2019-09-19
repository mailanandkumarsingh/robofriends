import React from 'react';
import {shallow} from 'enzyme';
import SearchField from './SearchField';

it('tests for SearchField shallow rendering', () => {    
    expect(shallow(<SearchField />)).toMatchSnapshot();
});