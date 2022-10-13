import React from "react";


export default class Deposit extends React.Component {
  render() {

    return (
      <form required>
        <input type="number" required></input>
        <button onClick={this.Deposit}>Deposit</button>
      </form>
    );
  }
}
