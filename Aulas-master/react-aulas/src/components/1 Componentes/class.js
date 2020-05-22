import React, { Component } from "react";

export class Contador extends Component {
  state = {
    clicks: 0,
  };

  menos = () => {
    this.setState({
      clicks: this.state.clicks - 1,
    });
  };
  mais = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };

  render() {
    return (
      <>
        <div>Contador: {this.state.clicks}</div>
        <button onClick={this.menos}> - </button>
        <button onClick={this.mais}> + </button>
      </>
    );
  }
}
