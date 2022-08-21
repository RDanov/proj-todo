import React, { Component } from "react";
import "./App.css";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";
import AddComponent from "./components/add-component";

class App extends Component {
  maxID = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Learn React"),
      this.createTodoItem("Create React App"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxID++,
      visible: true,
    };
  }

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
  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      const old = todoData;
      console.log([...old, newItem]);
      return { todoData: [...old, newItem] };
    });
  };

  filterBySearch = (text) => {
    this.setState(({ todoData }) => {
      console.log(text);

      const newArray = todoData;
      newArray.forEach((el) => {
        el.label.toLowerCase().includes(text.toLowerCase())
          ? (el.visible = true)
          : (el.visible = false);
      });

      console.log(newArray);
      return todoData;
    });
  };
  toggleProperty = (array, id, propName) => {
    const index = array.findIndex((el) => el.id === id);
    const oldItem = array[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const before = array.slice(0, index);
    const after = array.slice(index + 1);
    return [...before, newItem, ...after];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="App">
        <span>{new Date().toString()}</span>
        <AppHeader toDo={todoCount} done={doneCount} />
        <SearchPanel todos={todoData} filterBySearch={this.filterBySearch} />
        <ItemStatusFilter />
        <TodoList
          todos={todoData}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddComponent addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
