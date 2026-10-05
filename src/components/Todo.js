import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={todo}
          placeholder="Enter a todo"
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
