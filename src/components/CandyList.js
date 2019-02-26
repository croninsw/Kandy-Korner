import React, { Component } from "react"

export default class CandyList extends Component {
    render() {
        return (
            <section className="candy">
                <h4>Candies</h4>
                {
                this.props.candies.map(candy =>
                    <div>
                        <div>{candy.name}</div>
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

