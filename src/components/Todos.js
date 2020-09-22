import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Todos = (props) => {
  const { markComplete } = props;
  return props.todos.map((todo) => (
    <TodoItem todo={todo} markComplete={markComplete} key={todo.id} />
  ));
};

// PropsType
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;

// Enforce stateless React Components to be written as a pure function
// So dont do this
// import React, { Component } from 'react';

// class Todos extends Component {
//   constructor() {
//     super();
//     this.state = {
//       test: true,
//     };
//   }

//   render() {
//     const { todos } = this.props;
//     console.log(todos);
//     console.log(this.state);
//     return todos.map((todo) => (
//       <h3 key={todo.id}>{todo.id === 3 ? 'This is Dinner change' : todo.title}</h3>
//     ));
//   }
// }

// export default Todos;
