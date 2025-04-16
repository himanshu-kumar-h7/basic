import React, { useState } from 'react';
import '/Users/Himanshu/Documents/Work/Project2025/basic/src/Component/TodoCSS.css';

const TodoApp = () => {
  const [newTask, setNewTask] = useState(''); // For new task input
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add new task to the list with validation
  const addTask = () => {
    if (newTask.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask(''); // Clear input field after adding task
  };

  // Remove task from the list
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          value={newTask} 
          onChange={handleInputChange} 
          placeholder="Enter a new task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;



