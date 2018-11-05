import React from "react";

const Photo = ({ photo }) => (
  <div className="image">
    <div className="img">
      <img src={photo.url} />
    </div>
    <div>
      <p className="image__title">{photo.title.toUpperCase()}</p>
      <p className="image__album">Album Id: {photo.albumId}</p>
    </div>
  </div>
);

export default Photo;
