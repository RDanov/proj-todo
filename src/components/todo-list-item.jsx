import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {
  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? "tomato" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <div className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
          {label}
        </span>

        <button className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation"></i>
        </button>

        <button className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default TodoListItem;
