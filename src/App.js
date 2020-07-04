import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from "./components/Paper"

function App() {
  return (
    <div className="App">
      <Paper>
      <section className="header">
            <button className="header-btn main-black-color">Add</button>
            <h1 className="header-title">Todo Lists</h1>
            <button className="header-btn main-red-color">Clear</button>
          </section>
  
          <section className="add">
            <form className="add-form">
              <input type="text" className="add-input" />
              <button className="add-btn main-black-color">Add</button>
            </form>
          </section>
  
          <section className="todos">
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
            <div className="todo">
              <div className="todo-text">Learing React</div>
            </div>
          </section>
      </Paper>
    </div>
  );
}

export default App;
