import React from "react";
import "./todo-list-item.css";

class TodoListItem extends React.Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState({
      done: !this.state.done,
    });
  };
  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    } else {
      classNames = "todo-list-item";
    }

    const style = {
      color: important ? "tomato" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
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
