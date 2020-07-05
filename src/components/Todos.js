import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

export default function Todos({ todos, completeTodo }) {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add Todo by Clicking{" "}
          <span className="add-button-placeholder-text">Add</span> Button on The
          Top Left Corner
        </div>
      )}
    </section>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  completedTodo: PropTypes.func.isRequired,
};
