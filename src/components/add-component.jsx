import React, { Component } from "react";

import "./add-component.css";

class AddComponent extends Component {
  state = {
    label: "",
  };

  onLabelChange = (event) => {
    this.setState({ label: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="input-group mb-3 add-component" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="New todo item"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddComponent;
