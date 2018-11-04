import React from "react";

const Comment = ({ comment }) => (
  <div className="comment">
    <p>Name: {comment.name}</p>
    <p>Email: {comment.email}</p>
    <p>Body: {comment.body}</p>
  </div>
);

export default Comment;
