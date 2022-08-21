import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {
  state = {
    search: "",
  };

  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
    this.props.filterBySearch(event.target.value);
  };

  render() {
    return (
      <input
        placeholder="search"
        className="search-panel"
        onChange={this.onSearchChange}
        value={this.state.search}
      ></input>
    );
  }
}

export default SearchPanel;
