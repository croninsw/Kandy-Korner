import React, { Component } from "react"
import candy from "./candy.png"

export default class Candy extends Component {
    render() {
        return (
            <React.Fragment>
                <div key={this.props.candy.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={candy} alt="some text to make react happy" className="icon--candy" />
                            <div>{this.props.candy.name}</div>
                            <a href="#" onClick={() => this.props.deleteCandy(candy.id)}
                                className="card-link">Remove</a>
                        </h4>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
