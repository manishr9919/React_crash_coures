

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, markCompleted, deleteTodo } from './redux/action';

function App() {
  const [title, setTitle] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({ id: Date.now(), title }));
      setTitle(''); // Reset the input field
    }
  };

  // Mark todo as completed
  const handleMarkCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };


  return (
    <>
     <div>
      <h1>TODO App</h1>

      {/* Input for adding new todo */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button onClick={() => handleMarkCompleted(todo.id)}>
              {todo.completed ? 'Completed' : 'Mark as Completed'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    
    
     
    </>
  )
}

export default App
