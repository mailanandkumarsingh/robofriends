import React, { Component } from 'react';
import {connect} from 'react-redux';
import CarList from '../components/CardList';
import SearchField from '../components/SearchField';
import { setSearchField } from '../actions';

//Used to read data from the store
const mapStateToProps = (state) => {
    return {
        searchText: state.searchField
    }
}

//Used to updated the store my calling the actionCreator
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

export class App extends Component {
    state = {
        robots: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


    render() {
        const filteredRobot = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchText.toLowerCase());
        });

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchField onSearchFieldChange={this.props.onSearchFieldChange}/>
                <CarList robots={filteredRobot}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
