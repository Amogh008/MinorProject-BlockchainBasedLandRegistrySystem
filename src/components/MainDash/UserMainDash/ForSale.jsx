import React, { useState, useEffect, useContext } from "react";
import { Land, web3 } from "../../../Contract/LandContract";
import { SocketContext } from "../../../context/SocketContext";
import "./../Home.css";
const ForSale = () => {
  const { wadd, setLoading } = useContext(SocketContext);
  const [toggle, setToggle] = useState(true);
  const [reqs, setReq] = useState([]);
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchMyLands = async () => {
      setLoading(true);

      const lands = await Land.methods.ReturnAllLandList().call();
      await Promise.all(
        lands.map(async (id) => {
          const land = await Land.methods.lands(id).call();
          if (land["isforSell"] && land["ownerAddress"] !== wadd) {
            setLoading(false);
            setArr((arr) => [...arr, land]);
          }
        })
      );
      const arr2 = await Land.methods.mySentLandRequests().call({
        from: wadd
      });

      const arr3 = await Promise.all(
        arr2.map(async (e) => {
          const i = await Land.methods.LandRequestMapping(e).call();
          return i["landId"];
        })
      );

      setReq(arr3);
      setLoading(false);
    };
    fetchMyLands();
  }, [toggle]);
  const reqToBuy = async (e) => {
    try {
      setLoading(true);
      await Land.methods.requestforBuy(e.target.value).send({
        from: wadd
      });
      setArr([]);
      setToggle(!toggle);
    } catch (err) {
      alert("Error requesting");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="co">
      <table class="table table-striped table-dark">
        <thead className={"ths"}>
          <tr>
            <th>Area</th>
            <th>Owner Address</th>
            <th>LAT-LONG</th>
            <th>Address</th>
            <th>Price</th>

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
                <td>{el["allLatitudeLongitude"]}</td>
                <td>{el["landAddress"].substr(0, 20) + "..."}</td>
                <td>{el["landPrice"]}</td>

                <td>{el["physicalSurveyNumber"]}</td>
                <td>
                  <button
                    onClick={(e) => reqToBuy(e)}
                    value={el[0]}
                    className={
                      reqs.indexOf(el[0]) === -1
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm btn-danger"
                    }
                    disabled={reqs.indexOf(el[0]) === -1 ? false : true}
                  >
                    {reqs.indexOf(el[0]) === -1 ? (
                      <h6>
                        Request to <br />
                        Buy
                      </h6>
                    ) : (
                      <h6>
                        Request <br />
                        pending
                      </h6>
                    )}
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

export default ForSale;
