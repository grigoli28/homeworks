import React, { Component } from "react";
import Data from "./Data";
import UserInput from "./UserInput";

export default class App extends Component {
  state = {
    dataType: "users",
    dataCount: 10,
    dataUrl: `https://jsonplaceholder.typicode.com/users`
  };

  handleUserInput = (dataType, dataCount) =>
    this.setState({
      dataType,
      dataUrl: `https://jsonplaceholder.typicode.com/${dataType}`,
      dataCount
    });

  render() {
    return (
      <>
        <UserInput onSubmit={this.handleUserInput} />
        <div>
          <Data
            url={this.state.dataUrl}
            type={this.state.dataType}
            count={this.state.dataCount}
          />
        </div>
      </>
    );
  }
}
