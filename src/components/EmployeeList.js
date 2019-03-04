import React, { Component } from "react"

export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/employees/new")
                    }
                    }>
                    Hire New Employee
                    </button>
                <h4>Employees: </h4>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                                <section>{employee.name}</section>
                                <a href="#" onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Remove</a>
                            </div>

                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}