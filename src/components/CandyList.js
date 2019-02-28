import React, { Component } from "react"
import Candy from "./Candy";

export default class CandyList extends Component {
    render() {
        return (
            <section className="candy">
                {
                    this.props.candy.map(candy =>
                        <Candy key={`candy-${candy.id}`}
                            candy={candy}
                            deleteCandy={this.props.deleteCandy}
                            candyTypes={
                                this.props.candyTypes.find(
                                    t => t.id === candy.type
                                ).name
                            }
                        />
                    )
                }
            </section>
        )
    }
}

