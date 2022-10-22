import React from "react";

export default class Withdraw extends React.Component {
  inputWithdrawAmount = 0;
  inputWithdrawItem = "";
  getWithdrawAmount = (event) => {
    this.inputWithdrawAmount = parseInt(event.target.value);
  };

  getinputWithdrawItem = (event) => {
    this.inputWithdrawItem = event.target.value;
  };
  onSubmitHandel = (event) => {
    event.preventDefault();
    if (this.inputWithdrawAmount === 0) {
      alert("nothing is free bitch :)");
      return;
    }

    if (
      localStorage.getItem("balance") === null ||
      this.inputWithdrawAmount > parseInt(localStorage.getItem("balance"))
    ) {
      alert("u broke mate :)");
      return;
    }

    this.props.getWithdrawNumber(
      this.inputWithdrawAmount,
      this.inputWithdrawItem
    );
  };

  render() {
    return (
      <form required onSubmit={this.onSubmitHandel}>
        <h1> Withdraw </h1>
        <input
          placeholder="Name"
          required
          type="text"
          onChange={this.getinputWithdrawItem}
        ></input>
        <input
          type="number"
          required
          placeholder="withdraw amount:"
          onChange={this.getWithdrawAmount}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
