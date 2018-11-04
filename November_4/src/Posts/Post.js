import React from "react";

const Post = ({ post }) => (
  <div className="post">
    <p>Title: {post.title}</p>
    <p>Body: {post.body}</p>
  </div>
);

export default Post;
