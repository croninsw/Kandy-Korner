import React, { Component } from "react"

export default class CandyList extends Component {
    render() {
        return (
            <section className="candy">
                <h4>candies</h4>
                {
                this.props.candy.map(candy =>
                    <div className="card">
                        <div className="item-name">{candy.name}</div>
                        {
                            this.props.candyTypes.find(
                                t => t.id === candy.type
                            ).name
                        }
                    </div>
                )
                }
            </section>
        )
    }
}

