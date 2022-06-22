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

  return (
    <div className="co">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Area</th>
            <th>Owner Address</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
            <th>Survey</th>
            <th>For-Sale</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr>
                <td key={el[0]}>{el["area"]}</td>
                <td>{el["ownerAddress"].substr(0, 20) + "..."}</td>
                <td
                  onClick={(e) => alert("Full address : " + el["landAddress"])}
                >
                  {el["landAddress"].substr(0, 20) + "..."}
                </td>
                <td>{el["landPrice"]}</td>
                <td>{el["isLandVerified"] ? "Verified" : "Pending"}</td>
                <td>{el["physicalSurveyNumber"]}</td>
                <td>
                  <button
                    disabled={el["isforSell"] || !el["isLandVerified"]}
                    className={
                      el["isforSell"]
                        ? "btn btn-outline-primary"
                        : "btn btn-primary"
                    }
                  >
                    {!el["isforSell"] ? "Mark for sale" : "FOR SALE"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyLands;
