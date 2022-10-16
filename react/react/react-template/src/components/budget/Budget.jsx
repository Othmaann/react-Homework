import React from "react";

Deposit = (event) => {
  event.preventDefault();
  this.inputName = event.target.value;
  localStorage.setItem("inputName", this.inputName);
};

export default class Deposit extends React.Component {
  inputName = "";
  render() {
    this.inputName = localStorage.getItem("inputName");
    return (
      <form required>
        <input type="number" required onChange={this.Deposit} ></input>
        <button onClick={this.Deposit}>Deposit</button>
        <button onClick={() => this.clickMeThree(this.inputName)}>
          Click me Three
        </button>
        <h1>hi {this.inputName}</h1>
      </form>
    );
  }
}
