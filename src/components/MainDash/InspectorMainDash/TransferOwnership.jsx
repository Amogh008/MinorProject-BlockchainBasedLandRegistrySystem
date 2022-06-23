import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { Land } from "../../../Contract/LandContract";
import "./../Home.css";

const TransferOwnership = () => {
  const { wadd, setLoading } = useContext(SocketContext);
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setArr([]);
      const complete = await Land.methods.returnPaymentDoneList().call();
      await Promise.all(
        complete.map(async (id) => {
          const land = await Land.methods.LandRequestMapping(id).call();
          setLoading(false);

          if (land["requestStatus"] != 4) {
            setArr((arr) => [...arr, land]);
          }
        })
      );
      setLoading(false);
    };

    fetchData();
  }, [toggle]);
  const transferOwnership = async (e) => {
    try {
      setLoading(true);
      const yes = await Land.methods
        .transferOwnership(e.target.value, "www.documentBucket.com/123")
        .send({
          from: wadd
        });
      if (yes) {
        setToggle(!toggle);
      }
    } catch {
      alert("Transfer failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="co">
      <table class="table table-striped table-dark">
        <thead className={"ths"}>
          <tr>
            <th>Land ID</th>
            <th>Seller Address</th>

            <th>Payment status</th>
            <th>BuyerAddress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr>
                <td>{el["landId"]}</td>
                <td>{el["sellerId"]}</td>

                <td>{el["isPaymentDone"] ? "Done" : "Pending"}</td>
                <td>{el["buyerId"]}</td>
                <td>
                  <button
                    onClick={(e) => transferOwnership(e)}
                    value={el["reqId"]}
                    className={"btn btn-sm  btn-success"}
                  >
                    Transfer
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

export default TransferOwnership;
