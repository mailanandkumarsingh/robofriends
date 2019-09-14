import React, { Component } from 'react';
import CarList from './CardList';
import SearchField from './SearchField';

export class App extends Component {
    state = {
        robots: [],
        searchText: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchFieldChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchText: event.target.value
        });
    }

    render() {
        const filteredRobot = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase());
        });
        console.log('Nmae --/', filteredRobot);

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchField onSearchFieldChange={this.onSearchFieldChange}/>
                <CarList robots={filteredRobot}/>
            </div>
        )
    }
}

export default App
