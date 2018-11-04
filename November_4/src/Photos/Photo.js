import React from "react";

const Photo = ({ photo }) => (
  <div className="image">
    <div>
      <p>Title: {photo.title}</p>
      <p>Album: {photo.albumId}</p>
    </div>
    <img src={photo.thumbnailUrl} />
  </div>
);

export default Photo;
