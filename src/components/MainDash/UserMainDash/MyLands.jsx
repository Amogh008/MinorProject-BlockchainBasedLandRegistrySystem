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
      {/* <table>
      <thead>
       <tr>
        <th>Area</th>
        <th>Address</th>
        <th>City</th>
        <th>Price</th>
        <th>Survey Number</th>
       </tr>
    </thead>
    <tbody>
      {arr.map((el) => {
        return (<p key={el[0]}>{el["ownerAddress"]}</p>
        );
      })} */}
    </div>
  );
};

export default MyLands;
