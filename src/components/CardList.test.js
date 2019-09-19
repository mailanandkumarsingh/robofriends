import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

it('tests for CardList shallow rendering', () => {
    const mockRobot = [{
        id: 1,
        title: 'RoboCop',
        email: 'rbc@gmail.com',
        username: 'roborob'
    }]
    expect(shallow(<CardList robots={mockRobot}/>)).toMatchSnapshot();
});