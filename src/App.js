import "./App.css";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

function App() {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Learn React", important: false, id: 2 },
    { label: "Create React App", important: false, id: 3 },
  ];

  return (
    <div className="App">
      <span>{new Date().toString()}</span>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
