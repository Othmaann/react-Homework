import React from "react";

export default class Deposit extends React.Component {
  inputDepositAmount = 0;
  total = 0;
  getDespoitAmount = (event) => {
    this.inputDepositAmount = parseInt(event.target.value);
  };

  onSubmitHandel = (event) => {
    event.preventDefault();
    this.total = this.total + this.inputDepositAmount;
    this.props.getTotalNumber(this.total);
  };
  render() {
    return (
      <form required className="myForm" onSubmit={this.onSubmitHandel}>
         <h1> Deposit </h1>
        <input
          required
          placeholder="desposit amount:"
          type="number"
          onChange={this.getDespoitAmount}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
