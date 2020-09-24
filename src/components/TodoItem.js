import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const { markComplete } = props;
  const { id, title } = todo;
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

  // const markComplete = (e) => {
  //   console.log(e);
  // };

  // const getStyle = () => ({
  //   backgroundColor: '#f4f4f4',
  //   margin: '10px',
  //   textDecoration: todo.completed ? 'line-through' : '',
  //   color: todo.completed ? 'red' : '',
  // });
  return (
    <div style={getStyle()}>
      <div key={id}>
        <p>
          <input type="checkbox" style={{ marginRight: '10px' }} onChange={() => markComplete(id)} />
          {title}
        </p>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
