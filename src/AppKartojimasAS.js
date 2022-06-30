import { useState } from 'react';

export default function App() {
  const [newTaskValue, setNewTaskValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleDelete(taskIndex) {
    const filteredTodos = todos.filter((_, i) => i !== taskIndex);

    setTodos(filteredTodos);
  }

  function handleNewTodo(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      newTaskValue
    ]);
    setNewTaskValue('');
  }

  function handleInput(e) {
    setNewTaskValue(e.target.value);
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

      <form onSubmit={handleNewTodo}>
        <input 
          value={newTaskValue} 
          onChange={handleInput} 
          placeholder='Enter item' />
        <button>Submit</button>
      </form>
    </div>
  );
}