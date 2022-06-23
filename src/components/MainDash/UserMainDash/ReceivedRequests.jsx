import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { Land, web3 } from "../../../Contract/LandContract";
const ReceivedRequests = () => {
  const { wadd, setLoading } = useContext(SocketContext);
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  const status = [
    "requested",
    "accepted",
    "rejected",
    "paymentdone",
    "completed"
  ];
  useEffect(() => {
    const fetchMyLands = async () => {
      setLoading(true);

      const reqId = await Land.methods.myReceivedLandRequests().call({
        from: wadd
      });
      await Promise.all(
        reqId.map(async (id) => {
          const land = await Land.methods.LandRequestMapping(id).call();
          setLoading(false);
          console.log(land);
          setArr((arr) => [...arr, land]);
        })
      );
      setLoading(false);
    };
    fetchMyLands();
  }, [toggle]);
  return (
    <div className="co">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Req ID</th>
            <th>Buyer Address</th>
            <th>Land ID</th>
            <th>Payment status</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr>
                <td key={el[0]}>{el["reqId"]}</td>
                <td>{el["buyerId"]}</td>
                <td>{el["landId"]}</td>
                <td>{el["isPaymentDone"] ? "Done" : "Pending"}</td>
                <td>{status[el["requestStatus"]]} </td>
                <td>
                  <button className={"btn btn-danger"}></button> <br />
                  <button className={"btn btn-success"}></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReceivedRequests;
