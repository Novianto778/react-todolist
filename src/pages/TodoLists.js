import React, { useState } from "react";
import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../todoform/TodoForm";
import Todos from "../todos/Todos";
import Container from "../layout/Container";
import Item from "../layout/Item";

function TodoLists() {
  const [todos, setTodos] = useState([
    { text: "Learning React", isCompleted: false },
    { text: "Learning React", isCompleted: false },
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

  const showAddToggle = () => setShowAdd(!showAdd);

  const clearTodos = () => !showAdd && setTodos([]);

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Container flexDirection="column" justifyContent="space-between" height="100%">
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
}

export default TodoLists;
