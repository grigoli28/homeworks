import React from "react";

const Album = ({ album }) => (
  <div className="album">
    <p>Title: {album.title}</p>
    <p>User: {album.userId}</p>
  </div>
);

export default Album;
