import React from "react";
import Deposit from "./components/budget/Budget";
import Withdraw from "./components/withdraw/Withdraw";

class App extends React.Component {
  total = 0;
  getTotalNumber = (total) => {
    console.log(total);
    if (localStorage.getItem("budget")) {
      localStorage.setItem(
        "budget",
        parseInt(localStorage.getItem("budget")) + total
      );
    } else {
      localStorage.setItem("budget", total);
    }
    if (localStorage.getItem("balance")) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) + total
      );
    } else {
      localStorage.setItem("balance", total);
    }
    window.location.reload();
  };

  myArray = localStorage.getItem("myArray")
    ? JSON.parse(localStorage.getItem("myArray"))
    : [];

  getWithdrawNumber = (total, item) => {
    console.log(total);
    const object = {
      Name: item,
      Price: total,
    };
    let checkExist = false;
    this.myArray.forEach((value) => {
      if (value.Name === item) {
        checkExist = true;
      } else {
      }
    });
    if (checkExist) {
      alert("eemmm u cant buy the same thing mate :)");
      return;
    }

    this.myArray.push(object);
    localStorage.setItem("myArray", JSON.stringify(this.myArray));

    if (localStorage.getItem("withdraw")) {
      localStorage.setItem(
        "withdraw",
        parseInt(localStorage.getItem("withdraw")) + total
      );
    } else {
      localStorage.setItem("withdraw", total);
    }
    if (localStorage.getItem("balance")) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) - total
      );
    } else {
      localStorage.setItem("balance", total);
    }
    window.location.reload();
  };

  render() {
    const item = localStorage.getItem("budget")
      ? localStorage.getItem("budget")
      : 0;

    const withdraw = localStorage.getItem("withdraw")
      ? localStorage.getItem("withdraw")
      : 0;

    return (
      <div className="bank">
        <Deposit getTotalNumber={this.getTotalNumber}> </Deposit>
        <Withdraw getWithdrawNumber={this.getWithdrawNumber}></Withdraw>

        <h2>
          <div> Budget: {item}</div>
          <div> Withdraw: {withdraw}</div>
          <div> Balance: {item - withdraw} </div>
          {this.myArray.map((value) => {
            return (
              <div>
                <li> {value.Name} </li>
                <li> {value.Price} </li>
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default App;
