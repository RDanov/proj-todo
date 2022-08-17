import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          className="btn btn-outline-success btn-sm float-end"
          onClick={this.onMarkImportant}
        >
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
