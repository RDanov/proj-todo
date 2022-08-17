import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Learn React", important: false, id: 2 },
      { label: "Create React App", important: false, id: 3 },
    ],
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);

      return {
        todoData: [...before, ...after],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <span>{new Date().toString()}</span>
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={this.state.todoData} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
