import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos }) => {
  const items = todos.map((item) => {
    return (
      <li className="list-group-item todo-list" key={item.id}>
        <TodoListItem {...item} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{items}</ul>;
};

export default TodoList;
