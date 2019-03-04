import React, { Component } from "react";

export default class CandyForm extends Component {
  // Set initial state
  state = {
    candyName: "",
    candyType: ""
  }


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  }

  constructNewCandy = evt => {
    evt.preventDefault();

    const candy = {
      name: this.state.candyName,
    }

    this.props
        .addcandy(candy)
        .then(() => this.props.history.push("/candies"))
  }


  render() {
    return (
      <React.Fragment>
        <form className="candyForm">
          <div className="form-group">
            <label htmlFor="candyName">Candy name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="candyName"
              placeholder="Candy name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="candyType">Candy type</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="candyType"
              placeholder="Candy type"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewCandy}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}