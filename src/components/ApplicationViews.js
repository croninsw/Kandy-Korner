import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from './EmployeeList'
import CandyList from './CandyList';
import StoreList from './StoreList';


export default class ApplicationViews extends Component {

    state = {
        stores: [],
        candyTypes: [],
        employees: [],
        candy: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locationsArray")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employeesArray")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candiesArray")
                .then(r => r.json()))
            .then(candy => newState.candy = candy)
            .then(() => fetch("http://localhost:5002/candyTypesArray")
                .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => this.setState(newState))
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={() => {
                    return <CandyList candy={this.state.candy}
                        candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}