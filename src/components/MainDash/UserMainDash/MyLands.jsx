import React, { useEffect, useState } from "react";
import { Land, web3 } from "../../../Contract/LandContract";

const MyLands = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchMyLands = async () => {
      const accounts = await web3.eth.getAccounts();
      const lands = await Land.methods.myAllLands(accounts[0]).call();
      await Promise.all(
        lands.map(async (id) => {
          await Land.methods
            .lands(id)
            .call()
            .then((res) => {
              setArr([...arr, res]);
            });
        })
      );
    };
    fetchMyLands();
  }, []);
  console.log(arr);
  return (
    <div className="co">
      This page which holds the transaction to the contract is under
      construction
    </div>
  );
};

export default MyLands;
