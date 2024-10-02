import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState(''); // No default state for new task
  const [completedTasks, setCompletedTasks] = useState(null); // Incorrect initial type, should be Task[] or undefined

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task title cannot be empty");
      // Missing return statement here, so it will continue to add an empty task
    }

    const newTaskItem: Task = {
      id: tasks.length + 1, 
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask(''); // Reset the new task input
  };

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed; // Directly mutating state, not allowed in React
      }
      return task;
    });
    setTasks(updatedTasks); // Re-setting the tasks array after mutation
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks); 
  };

  // Missing check for when there are no tasks in the list
  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
