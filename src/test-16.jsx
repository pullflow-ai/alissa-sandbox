import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); // No validation for empty string or whitespace

  const addTodo = () => {
    if (newTodo === '') {
      alert('Todo cannot be empty!');
      // Missing return, so the function continues even after the alert
    }

    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo(''); // Resets input field
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; // Mutating state directly, which is not allowed in React
      }
      return todo;
    });
    setTodos(updatedTodos); // Should avoid mutating state directly
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleComplete(todo.id)}>Toggle Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing default export statement
