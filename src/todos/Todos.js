import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
// import styles from "./todos.module.css"
import * as styles from "./todos.styles";

export default function Todos({ todos, completeTodo }) {
  return (
    <section css={styles.todos}>
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
        <div css={styles.todoPlaceholderText}>
          Add Todo by Clicking{" "}
          <span css={styles.addButtonPlaceholderText}>Add</span> Button on The
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
