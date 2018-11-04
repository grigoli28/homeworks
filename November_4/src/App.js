import React, { Component } from "react";
import Data from "./Data";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    dataType: "photos",
    dataCount: 50,
    dataUrl: `https://jsonplaceholder.typicode.com/posts`
  };

  handleUserInput = dataType =>
    this.setState({
      dataType,
      dataUrl: `https://jsonplaceholder.typicode.com/${dataType}`
    });

  render() {
    return (
      <>
        <UserInput onSubmit={this.handleUserInput} />
        <Data
          url={this.state.dataUrl}
          type={this.state.dataType}
          count={this.state.dataCount}
        />
      </>
    );
  }
}

export default App;
