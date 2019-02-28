import React, { Component } from "react"
import candy from "./candy.png"

export default class Candy extends Component {
    render() {
        return (
            <div key={this.props.candy.id} className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        <img src={candy} alt="some text to make react happy" className="icon--candy" />
                        <div>{this.props.candy.name}</div>
                        <button onClick={() => this.props.deleteCandy(this.props.candy.id)} className="card-link">Delete Candy</button>
                    </h4>
                </div>
            </div>
        )
    }
}
