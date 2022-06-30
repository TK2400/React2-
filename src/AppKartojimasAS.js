import { useState } from 'react';
import FormToDo from './components/FormToDo'

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleDelete(taskIndex) {
    const filteredTodos = todos.filter((_, i) => i !== taskIndex);

    setTodos(filteredTodos);
  }

  function handleNewTodo(newTaskValue) {
    setTodos([
      ...todos,
      newTaskValue
    ]);
  }

  return (
    <div className='app'>
      <h1>You have {todos.length} Todos</h1>

      <ul>
        {todos.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleDelete(index)}>x</button>
            </li>
          );
        })}
      </ul>

      {todos.length > 4 && <h2>Jau daug taskų! Ar suspėsi viską padaryt?</h2>}
      <FormToDo addToDo={handleNewTodo}></FormToDo>
    </div>
  );
}