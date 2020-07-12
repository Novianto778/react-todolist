import React from "react";
import PropTypes from "prop-types";
// import styles from "./todo.module.css"
import * as styles from "./todo.styles";
import { useTheme } from "emotion-theming";

export default function Todo({ text, completeTodo, index, isCompleted }) {
  const theme = useTheme();
  return (
    <div css={styles.todo(theme)}>
      <span
        css={styles.todoText(theme, isCompleted)}
        onClick={() => completeTodo(index)}
        // style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
