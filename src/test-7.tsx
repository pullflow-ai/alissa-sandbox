import React, { useState, useEffect } from 'react';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // Intentionally missing the dependency array in useEffect
  useEffect(() => {
    fetchTodos();
  });

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      // Incorrect type assumption (data might not be in the expected format)
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = () => {
    if (newTodo.trim() === '') {
      // Logic error: Should return here to prevent adding an empty todo
      alert('Todo cannot be empty');
    }

    const newTodoItem: TodoItem = {
      id: todos.length + 1, // May cause issues if IDs are not sequential
      title: newTodo,
      completed: false
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => {todo.completed = !todo.completed}}>Toggle Complete</button>
            {/* Logic error: state should be updated using setTodos, not directly modifying the object */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
