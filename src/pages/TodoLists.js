import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

function TodoLists() {
  const [todos, setTodos] = useState([
    
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Only 8 todo allowed");
    }
  };

  const showAddToggle = () =>  setShowAdd(!showAdd);

  const clearTodos = () => !showAdd && setTodos([])

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos}/>
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}

export default TodoLists;
