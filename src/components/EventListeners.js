import { Component } from "react"

export default class EventListeners extends Component {
    render() {
        return(
            document.querySelector("#newEmployeeButton").addEventListener("click", (event) => {

            })
        )
    }
}