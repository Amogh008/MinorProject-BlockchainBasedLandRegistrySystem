import React, { useEffect, useState } from "react";
import web3 from "../../web3";
import "./Home.css";
const Home = () => {
  const [accountAddress, setAccountAddress] = useState("Getting address...");
  useEffect(() => {
    const getAccountAddress = async () => {
      const address = await web3.eth.getAccounts();
      setAccountAddress(address);
    };
    getAccountAddress();
  }, []);
  return <div className="co">{accountAddress}</div>;
};
export default Home;
