import React, { useEffect } from "react";
import { Land } from "./../../../Contract/LandContract";
import { web3 } from "./../../../Contract/LandContract";
const Dashboard = () => {
  useEffect(() => {
    const checkManager = async () => {
      const accounts = await web3.eth.getAccounts();
      // const add = ["0x71B90A60b4120ab43E0E6b857a1736925d7e831B"];
      const msg = await Land.methods.isContractOwner(accounts[0]).call();
      console.log(msg);
    };
    checkManager();
  }, []);
  return (
    <div className="co">
      This page which holds the transaction to the contract is under
      construction
    </div>
  );
};

export default Dashboard;
