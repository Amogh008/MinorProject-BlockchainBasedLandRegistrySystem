import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { Land } from "../../../Contract/LandContract";
const VerifyLands = () => {
  const { wadd } = useContext(SocketContext);
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const allLand = await Land.methods.ReturnAllLandList().call();
      const unVerified = [];
      await Promise.all(
        allLand.map(async (i) => {
          const notVer = await Land.methods.isLandVerified(i).call();
          if (!notVer) {
            unVerified.push(i);
          }
        })
      );

      const landDetails = await Promise.all(
        unVerified.map(async (e) => {
          return await Land.methods.lands(e).call();
        })
      );
      setArr(landDetails);
    };
    fetch();
  }, [toggle]);
  const handleVerify = async (e) => {
    try {
      await Land.methods.verifyLand(e.target.value).send({
        from: wadd
      });
      setToggle(!toggle);
      alert("Land verified");
    } catch (err) {
      alert(err);
    }
  };
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr>
                <td key={el[0]}>{el["area"]}</td>
                <td>{el["ownerAddress"]}</td>
                <td>{el["landAddress"].substr(0, 20) + "..."}</td>
                <td>{el["landPrice"]}</td>
                <td>{el["isLandVerified"] ? "Verified" : "Pending"}</td>
                <td>{el["physicalSurveyNumber"]}</td>
                <td>
                  <button
                    value={el[0]}
                    onClick={(e) => handleVerify(e)}
                    className={"btn btn-success"}
                  >
                    Verify
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

export default VerifyLands;
