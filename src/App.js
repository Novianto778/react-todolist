import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Paper from "./components/Paper";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Paper>
        <Header />
        <TodoForm />
        <Todos />
      </Paper>
    </div>
  );
}

export default App;
