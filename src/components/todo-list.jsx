import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDelete }) => {
  const items = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item" key={id}>
        <TodoListItem {...itemProps} onDelete={() => onDelete(id)} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{items}</ul>;
};

export default TodoList;
