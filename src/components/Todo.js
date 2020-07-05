import React from "react";
import PropTypes from 'prop-types'


export default function Todo(props) {
  return (
      <div className="todo">
        <span className="todo-text">{props.text}</span>
      </div>
    
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};
