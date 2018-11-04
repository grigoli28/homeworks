import React, { Component } from "react";

const UserInput = props => (
  <>
    <form
      onSubmit={e => {
        e.preventDefault();
        const dataType = e.target.elements.dataType.value;
        props.onSubmit(dataType);
      }}
    >
      <select name="dataType">
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="albums">Albums</option>
        <option value="photos">Photos</option>
        <option value="todos">Todos</option>
        <option value="users">Users</option>
      </select>

      <button type="submit">Show</button>
    </form>
  </>
);

export default UserInput;
