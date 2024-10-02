import React, { useState } from 'react';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask === '') {
      alert('Task cannot be empty');
    }
    tasks.push(newTask); // Directly mutating state instead of using setTasks
    setNewTask(''); // Doesn't prevent adding empty task
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1); // Directly mutating state
    setTasks(tasks); // Incorrectly updating state
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// No export statement
