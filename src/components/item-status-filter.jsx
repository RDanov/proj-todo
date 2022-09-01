import React, { Component } from "react";

//import "./item-status-filter.css";

class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  onClickFilter = (name) => {
    this.setState({ filter: name });
    console.log(name);
    this.props.filterByPanel(name);
  };

  render() {
    const { filter, filterByPanel } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={name}
          onClick={() => filterByPanel(name)}
        >
          {label}
        </button>
      );
    });
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        {buttons}
      </div>
    );
  }
}

export default ItemStatusFilter;
