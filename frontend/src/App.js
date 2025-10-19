import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || '/api';

  useEffect(() => {
    fetch(API_URL + '/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
  }, [API_URL]);

  const addTodo = async () => {
    const res = await fetch(API_URL + '/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    });
    const todo = await res.json();
    setTodos([...todos, todo]);
    setText('');
  };

  const deleteTodo = async (id) => {
    await fetch(API_URL + '/todos/' + id, { method: 'DELETE' });
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>MERN on Kubernetes</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
