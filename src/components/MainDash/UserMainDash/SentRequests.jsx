import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { Land, web3 } from "../../../Contract/LandContract";
import "./../Home.css";
const SentRequests = () => {
  const { wadd, setLoading } = useContext(SocketContext);
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  const status = [
    "requested",
    "accepted",
    "rejected",
    "payment done",
    "completed"
  ];
  useEffect(() => {
    const fetchMyLands = async () => {
      setArr([]);
      setLoading(true);

      const reqId = await Land.methods.mySentLandRequests().call({
        from: wadd
      });
      await Promise.all(
        reqId.map(async (id) => {
          const land = await Land.methods.LandRequestMapping(id).call();
          setLoading(false);

          setArr((arr) => [...arr, land]);
        })
      );
      setLoading(false);
    };
    fetchMyLands();
  }, [toggle]);
  const makePayment = async (e) => {
    try {
      setLoading(true);
      const landReq = await Land.methods
        .LandRequestMapping(e.target.value)
        .call();
      const id = landReq["landId"];

      const landDetails = await Land.methods.lands(id).call();

      await Land.methods.makePayment(e.target.value).send({
        from: wadd,
        value: landDetails["landPrice"]
      });
      setToggle(!toggle);
    } catch {
      alert("Error in paying");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="co">
      <table class="table table-striped table-dark">
        <thead className={"ths"}>
          <tr>
            <th>Req ID</th>
            <th>Seller Address</th>
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
                <td>{el["sellerId"]}</td>
                <td>{el["landId"]}</td>
                <td>{el["isPaymentDone"] ? "Done" : "Pending"}</td>
                <td>{status[el["requestStatus"]]} </td>
                <td>
                  <button
                    onClick={(e) => makePayment(e)}
                    value={el["reqId"]}
                    disabled={
                      el["requestStatus"] === 1 || el["requestStatus"] === 3
                        ? false
                        : true
                    }
                    className={"btn btn-sm  btn-success"}
                  >
                    Make Payment
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

export default SentRequests;
