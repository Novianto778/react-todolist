import React from "react";
import PropTypes from 'prop-types'


export default function Todo({text, completeTodo, index, isCompleted}) {
  return (
      <div className="todo">
        <span className="todo-text" onClick={()=> completeTodo(index)} style={{textDecoration: isCompleted ? "line-through" : "initial"}}>{text}</span>
      </div>
    
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,


};
