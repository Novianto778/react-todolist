import React, { useState } from "react";
import PropTypes from "prop-types";
// import styles from "./todoform.module.css"
import * as styles from "./todoform.styles"
import {useTheme} from "emotion-theming"

export default function TodoForm({ addTodo, showAdd }) {
  const theme = useTheme()
  const [value, setValue] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("No Blank Todo");
      
      return;
    }
    if(value.length > 40){
      alert("Please Create a Shorter Todo");
      setValue('');
      return;
    }
    addTodo(value);
    setValue("");
  };

  if(showAdd){
  return (
    <section css={styles.add}>
      <form css={styles.addForm} onSubmit={handleFormSubmit}>
        <input
          type="text"
          css={styles.addInput(theme)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button css={styles.addBtn(theme)}>Add</button>
      </form>
    </section>
  );
  }else {
    return null;
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd : PropTypes.bool.isRequired
};
