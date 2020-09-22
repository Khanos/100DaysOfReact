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
      count: 0,
    };
  }

  markComplete(id) {
    console.log(id);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { todos } = this.state;
    const { count } = this.state;
    return (
      <div className="App">
        <h1>This is a test</h1>
        <br />
        <Todos todos={todos} markComplete={this.markComplete} />
        <br />
        <p>
          {count}
        </p>
        <button onClick={this.incrementCount.bind(this)}>Test</button>
      </div>
    );
  }
}

export default App;
