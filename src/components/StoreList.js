import React, { Component } from "react"

export default class StoreList extends Component {
    render() {
        return (
            <section className="stores">
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        <h2>{store.name}</h2>
                        <section>{store.address}</section>
                        <hr />
                    </div>
                )
            }
            </section>
        )
    }
}

