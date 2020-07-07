import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import styles from "./header.module.css"

export default function Header({ showAddToggle, showAdd, clearTodos }) {
  return (
    <section className={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {
          showAdd ? "Finish" : "Add"
        }
      </button> */}

      <Button
        onClick={showAddToggle}
        text={showAdd ? "FInish" : "Add"}
        color={"black"}
        align={"left"}
      />
      <h1 className={styles.headerTitle}>Todo Lists</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button
        onClick={clearTodos}
        text={"Clear"}
        color={"red"}
        align={"right"}
      />
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
};