import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]); 

  const handleAdd = () => {
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTask]);
    setTask('')
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>TODO'S</h1>

      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={handleAdd}>Add</button>

      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            <span onClick={() => handleToggle(todo.id)}>
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Todo;
