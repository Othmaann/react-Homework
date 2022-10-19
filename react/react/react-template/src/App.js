import React from "react";
import Deposit from "./components/budget/Budget";
import Withdraw from "./components/withdraw/Withdraw";

class App extends React.Component {
  total = 0;
  getTotalNumber = (total) => {
    if (localStorage.getItem("total")) {
      localStorage.setItem(
        "total",
        parseInt(localStorage.getItem("total")) + total
      );
    } else {
      localStorage.setItem("total", total);
    }
    window.location.reload();
  };

  render() {
    const item = localStorage.getItem("total")
      ? localStorage.getItem("total")
      : 0;
    return (
      <div>
        <Deposit
          getTotalNumber={this.getTotalNumber}
        />
        <Withdraw />
        <h3>{item}</h3>
      </div>
    );
  }
}

export default App;
