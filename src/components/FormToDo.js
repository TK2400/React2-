import { useState } from "react";

export default function FormToDo(props) {
  
  const [newTaskValue, setNewTaskValue] = useState('');

  function handleNewTodo(e) {
    e.preventDefault();
    props.addToDo(newTaskValue)
    
    setNewTaskValue('');
  }

  function handleInput(e) {
    setNewTaskValue(e.target.value);
  }

  return (<form onSubmit={handleNewTodo}>
    <input
      value={newTaskValue}
      onChange={handleInput}
      placeholder='Enter item' />
    <button>Submit</button>
  </form>
  )
}
