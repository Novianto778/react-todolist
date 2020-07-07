import React from "react";
import PropTypes from 'prop-types'
import styles from "./todo.module.css"


export default function Todo({text, completeTodo, index, isCompleted}) {
  return (
      <div className={styles.todo}>
        <span className={styles.todoText} onClick={()=> completeTodo(index)} style={{textDecoration: isCompleted ? "line-through" : "initial"}}>{text}</span>
      </div>
    
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,


};
