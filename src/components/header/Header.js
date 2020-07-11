import React from "react";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";
import Button from "../button/Button";
// import styles from "./header.module.css";
import * as styles from "./header.style";

export default function Header({ showAddToggle, showAdd, clearTodos }) {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {
          showAdd ? "Finish" : "Add"
        }
      </button> */}

      <Button
        onClick={showAddToggle}
        text={showAdd ? "Finish" : "Add"}
        color={"black"}
        align={"left"}
      />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
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
