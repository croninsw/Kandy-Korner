import React, { Component } from "react"

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Employees: </h4>
                <section className="employees">
                    {

                        this.props.employees.map(employee =>
                            <div key={employee.id}>

                                <section>{employee.name}</section>
                            </div>
                        )
                    }
                </section>

                <input type="text" id="newEmployeeInput" placeholder="New Employee Name"></input>
                <button id="newEmployeeButton">Add New Employee</button>
            </React.Fragment>
        )
    }
}