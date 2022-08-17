import React, { Component } from "react";

//import "./item-status-filter.css";

class ItemStatusFilter extends Component {
  render() {
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-primary">
          Left
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Middle
        </button>
        <button type="button" className="btn btn-outline-primary">
          Right
        </button>
      </div>
    );
  }
}

export default ItemStatusFilter;
