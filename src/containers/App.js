import React, { Component } from 'react';
import {connect} from 'react-redux';
import CarList from '../components/CardList';
import SearchField from '../components/SearchField';
import { setSearchField, requestRobots } from '../actions';

//Used to read data from the store
const mapStateToProps = (state) => {
    return {
        searchText: state.searchRobots.searchField,
        robots: state.requestRobots.robots
    }
}

//dispatch is used to call the action, it could be a function that returns an action Object
// or more decleratively directly an action Object
//Used to updated the store my calling the actionCreator
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
        requestedRobots: () => dispatch(requestRobots())
    }
}

export class App extends Component {

    componentDidMount() {
        this.props.requestedRobots();
    }


    render() {
        const filteredRobot = this.props.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.props.searchText.toLowerCase());
        });

        return (
            <div className="tc" id="roboContainer">
                <h1>Robo Friends</h1>
                <SearchField onSearchFieldChange={this.props.onSearchFieldChange}/>
                <CarList robots={filteredRobot}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
