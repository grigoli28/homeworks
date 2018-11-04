import React from "react";

const Todo = ({ todo }) => (
  <div className="todo">
    <p>Title: {todo.title}</p>
    <p>User: {todo.userId}</p>
    <p>{!todo.completed && "Not"} Completed</p>
  </div>
);

export default Todo;
