import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleDone,
  done,
  important,
  visible,
}) => {
  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }

  if (visible) {
    return (
      <div className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          className="btn btn-outline-success btn-sm float-end"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>

        <button
          className="btn btn-outline-danger btn-sm float-end"
          onClick={onDelete}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    );
  } else return null;
};

export default TodoListItem;
