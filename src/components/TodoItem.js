import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const getStyle = () => {
    const style = {
      backgroundColor: '#f4f4f4',
      margin: '10px',
    };
    if (todo.completed) {
      style.textDecoration = 'line-through';
      style.color = 'red';
    }
    return style;
  };
  // const getStyle = () => ({
  //   backgroundColor: '#f4f4f4',
  //   margin: '10px',
  //   textDecoration: todo.completed ? 'line-through' : '',
  //   color: todo.completed ? 'red' : '',
  // });
  return (
    <div style={getStyle()}>
      <p>
        {todo.title}
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;