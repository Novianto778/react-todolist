import React from "react";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";
import Button from "../button/Button";
// import styles from "./header.module.css";
import * as styles from "./header.style";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

export default function Header({ showAddToggle, showAdd, clearTodos }) {
  const theme = useTheme();
  return (
    <section className="header-component">
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {
          showAdd ? "Finish" : "Add"
        }
      </button> */}
      <Container alignItems="flex-start">
        <Item flex="1">
          <Button
            onClick={showAddToggle}
            text={showAdd ? "Finish" : "Add"}
            color={"black"}
            align={"left"}
          />
        </Item>
        <Item flex="2">
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        <Item flex="1" align="right">
          {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
          <Button
            onClick={clearTodos}
            text={"Clear"}
            color={"red"}
            align={"right"}
          />
        </Item>
      </Container>
    </section>
  );
}

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
};
