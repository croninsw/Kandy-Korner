import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from './EmployeeList'
import CandyList from './CandyList';
import StoreList from './StoreList';
import KandyManager from "../modules/KandyManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoreManager from "../modules/StoreManager"


export default class ApplicationViews extends Component {

    state = {
        stores: [],
        candyTypes: [],
        employees: [],
        candy: []
    }

    deleteCandy = (id) => {
        fetch(`http://localhost:5002/candiesArray/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch("http://localhost:5002/candiesArray"))
        .then(r => r.json())
        .then(candy => this.setState({candy: candy}))
    }

    componentDidMount() {

        StoreManager.getAll().then(AllLocations => {
            this.setState({
                stores: AllLocations
            })
        })
        EmployeeManager.getAll().then(AllEmployees => {
            this.setState({
                employees: AllEmployees
            })
        })
        KandyManager.getAll().then(AllKandy => {
            this.setState({
                candy: AllKandy
            })
        })
        fetch("http://localhost:5002/candyTypesArray").then(r => r.json()).then(AllKandyTypes => {
            this.setState({candyTypes: AllKandyTypes})
        })
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candy" render={() => {
                    return <CandyList candy={this.state.candy}
                        candyTypes={this.state.candyTypes}
                        deleteCandy={this.deleteCandy} />
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}