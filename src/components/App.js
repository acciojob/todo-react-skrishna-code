import React from "react";
import Todo from "./Todo";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <Todo />
    </div>
  );
};

export default App;
