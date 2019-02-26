import React, { Component } from "react"
import StoreList from "./StoreList";
import EmployeeList from "./EmployeeList";
import CandyList from "./CandyList";
import "./main.css"


class KandyKorner extends Component {

    locationsArray = [
        { id: 1, name: "Krusty's Kandy Kastle", address: "111 One Way" },
        { id: 2, name: "KayBee's", address: "222 Aren't You Glad I Didn't Say Orange Street" },
        { id: 3, name: "Kandy Land", address: "333 What Am I Doing Anymore" },
        { id: 4, name: "Kool Aid", address: "444 Stop Watching Me Brian Boulevard" },
        { id: 5, name: "Kookoo For Kandy", address: "555 Kandy Road" },
        { id: 6, name: "Krab's Kazz", address: "666 Devil Lane" }
    ]
    candyTypesArray = [
        { id: 1, name: "Chocolate" },
        { id: 2, name: "Sour" },
        { id: 3, name: "Sugar-crusted" },
        { id: 4, name: "Gummy" },
        { id: 5, name: "Rock" },
        { id: 6, name: "Taffy" }
    ]
    employeesArray = [
        { id: 1, name: "Brian" },
        { id: 2, name: "Connor" },
        { id: 3, name: "Panya" },
        { id: 4, name: "Mo" },
        { id: 5, name: "Steven" },
        { id: 6, name: "Abbey" }
    ]
    candiesArray = [
        { id: 1, name: "Foil wrapped chocolate bar", type: 1 },
        { id: 2, name: "Jelly beans", type: 4 },
        { id: 3, name: "Jolly's Stick candy", type: 5 },
        { id: 4, name: "Skittles", type: 2 },
        { id: 5, name: "M&Ms", type: 1 },
        { id: 6, name: "Dip Sticks", type: 3 }
    ]

    state = {
        stores: this.locationsArray,
        candyTypes: this.candyTypesArray,
        employees: this.employeesArray,
        candies: this.candiesArray
    }

    render() {
        return (
            <section className="kandy">
                <StoreList stores={this.state.stores} />
                <article className="employee_box">
                    <EmployeeList employees={this.state.employees} />
                </article>
                <article className="candy_box">
                    <CandyList candies={this.state.candies}
                        candyTypes={this.state.candyTypes}
                    />
                </article>
            </section>
        )
    }
}


export default KandyKorner