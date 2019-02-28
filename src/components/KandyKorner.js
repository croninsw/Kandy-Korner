import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";


class KandyKorner extends Component {

    state = {
        stores: this.locationsArray,
        candyTypes: this.candyTypesArray,
        employees: this.employeesArray,
        candies: this.candiesArray
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner