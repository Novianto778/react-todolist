import React from "react";
import Todo from "./Todo";

export default function Todos() {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    
  ]
  return (
    <section className="todos">
      {todos.map((todo)=> {
        return <Todo text={todo.text}/>
      })}
    </section>
  );
}
