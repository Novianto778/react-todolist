import React from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import TodoLists from "./pages/TodoLists";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262",
    },
  },
  background: {
    color: {
      primary: "#f2eecb",
    },
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TodoLists />
      </ThemeProvider>
    </div>
  );
}

export default App;
