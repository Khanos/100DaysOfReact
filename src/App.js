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
  }

  render() {
    return (
      <div className="App">
        <h1>This is a test</h1>
        <br/>
        <Todos/>
        <Todos/>
        <Todos/>
        <Todos/>
      </div>
    );
  };
}

export default App;