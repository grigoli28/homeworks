import React from "react";

const Details = ({ user }) => (
  <div>
    Personal: <div>Name : {user.name}</div>
    <div>Username: {user.username}</div>
    <div>Email: {user.email}</div>
    <div>Phone: {user.phone}</div>
    <div>Website: {user.website}</div>
  </div>
);

export default Details;
