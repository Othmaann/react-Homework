import React from "react";
import Deposit from "./components/budget/Budget";
import Withdraw from "./components/withdraw/Withdraw";

class App extends React.Component {

  Mymoney = {
    "budget" : Number,
    "Withdraw" : Number,
    "balance" : Number
  }

  render() {
    return (
      <div>
        <Deposit />
        <Withdraw />
      </div>
    );
  }
}

export default App;
