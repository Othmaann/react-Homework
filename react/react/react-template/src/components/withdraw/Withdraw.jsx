import React from "react";

export default class Withdraw extends React.Component {
  render() {
    return (
      <form required>
        <input type="text" required></input>
        <input type="number" required></input>
        <button onClick={this.Withdraw}>withdraw</button>
      </form>
    );
  }
}
