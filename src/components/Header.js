import React from "react";
import PropTypes from 'prop-types'

export default function Header({showAddToggle, showAdd, clearTodos}) {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {
          showAdd ? "Finish" : "Add"
        }
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color" onClick={clearTodos}>Clear</button>
    </section>
  );
}

Header.propTypes = {
  showAddToggle : PropTypes.func.isRequired,
  showAdd : PropTypes.bool.isRequired,
  clearTodos : PropTypes.func.isRequired,

}

