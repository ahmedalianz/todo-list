import { useDeferredValue, useState } from "react";
import { Filterer, Loader, TodoItem } from "./components";
import useTodoList from './hooks/useTodoList';
function App() {
  
const {todos,loading}=useTodoList()
const [filter, setFilter] = useState('');
const deferredFilter=useDeferredValue(filter)

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(deferredFilter.toLowerCase())
  );

  return (
    <div className="App">
    <h1>Todo List</h1>
    <Filterer filter={filter} setFilter={setFilter} />
   {loading?<Loader/>: <div className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>}
  </div>
  )
}

export default App
