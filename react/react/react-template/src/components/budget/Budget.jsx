import React from "react";

export default class Deposit extends React.Component {
  inputDepositAmount = 0;
  total = 0;
  getDespoitAmount = (e) => {
    this.inputDepositAmount = parseInt(e.target.value);
  };

  onSubmitHandel = (e) => {
    e.preventDefault();
    this.total = this.total + this.inputDepositAmount;
    this.props.getTotalNumber(this.total);
  };
  render() {
    return (
      <form required className="myForm" onSubmit={this.onSubmitHandel}>
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
