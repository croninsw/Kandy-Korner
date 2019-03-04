import React, { Component } from "react"
import Candy from "./Candy";

export default class CandyList extends Component {
    render() {
        return (
            <section className="candy">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/candies/new")
                    }
                    }>
                    Create New Candy
                </button>
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

