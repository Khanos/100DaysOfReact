import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, title: 'Take aout the garbage', completed: false },
        { id: 2, title: 'Play guitar', completed: false },
        { id: 3, title: 'Dinner with wife', completed: false },
        { id: 4, title: 'Meeting with boss', completed: false },
      ],
    };
    // Bindigns <- this is a pain in the ass
    // Also you can use arrow functions to set the callse methods
    // to avoid this binding, but linter shows warnings.
    this.markComplete = this.markComplete.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  markComplete(id) {
    const { todos } = this.state;
    const newTodos = todos.map((el) => {
      const newEl = el;
      if (newEl.id === id) {
        newEl.completed = !newEl.completed;
      }
      return newEl;
    });
    return this.setState({ todos: newTodos });
  }

  addTodo() {
    const { todos } = this.state;
    const maxId = todos.reduce((acc, el) => {
      let max = acc;
      if (max < el.id) {
        max = el.id;
      }
      return max;
    }, 0);
    const inputTitle = document.getElementById('new-todo').value;
    todos.push({ id: maxId + 1, title: inputTitle, completed: false });
    return this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todo List</h1>
        <br />
        <Todos todos={todos} markComplete={this.markComplete} />
        <br />
        <input type="text" id="new-todo" />
        <button type="button" onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default App;
