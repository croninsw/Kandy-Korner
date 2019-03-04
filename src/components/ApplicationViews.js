import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from './EmployeeList'
import CandyList from './CandyList';
import StoreList from './StoreList';
import KandyManager from "../modules/KandyManager"
import EmployeeManager from "../modules/EmployeeManager"
import StoreManager from "../modules/StoreManager"
import EmployeeForm from "./EmployeeForm"
import CandyForm from './CandyForm';


export default class ApplicationViews extends Component {

    state = {
        stores: [],
        candyTypes: [],
        employees: [],
        candy: []
    }

    addCandy = (candy) => {
        return KandyManager.post(candy)
            .then(() => KandyManager.getAll())
            .then(candy =>
                this.setState({
                    candy: candy
                }))
    }

    addEmployee = (employee) => {
        return EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                }))
    }

    addLocation = (store) => {
        return StoreManager.post(store)
            .then(() => StoreManager.getAll())
            .then(stores =>
                this.setState({
                    stores: stores
                }))
    }

    deleteCandy = (id) => {
        return KandyManager.delete(id)
            .then(candy => this.setState({
                candy: candy
            }))
    }

    deleteEmployee = (id) => {
        return EmployeeManager.delete(id)
            .then(employee => this.setState({
                employees: employee
            }))
    }

    deleteLocation = (id) => {
        return StoreManager.delete(id)
            .then(store => this.setState({
                stores: store
            }))
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
        fetch("http://localhost:5002/candyTypes").then(r => r.json()).then(AllKandyTypes => {
            this.setState({ candyTypes: AllKandyTypes })
        })
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList {...props} candy={this.state.candy}
                        candyTypes={this.state.candyTypes}
                        deleteCandy={this.deleteCandy} />
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyForm {...props} candy={this.state.candy}
                        candyTypes={this.state.candyTypes}
                        addCandy={this.addCandy} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList {...props} employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} employees={this.state.employees} addEmployee={this.addEmployee} />
                }} />
            </React.Fragment>
        )
    }
}