import React, { useContext, useEffect, useState } from "react";
import { Land } from "../../../Contract/LandContract";
import { SocketContext } from "../../../context/SocketContext";

const VerifyUser = () => {
  const { wadd, setLoading } = useContext(SocketContext);
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userList = await Land.methods.ReturnAllUserList().call();
      const unVerified = [];
      await Promise.all(
        userList.map(async (i) => {
          const notVer = await Land.methods.isUserVerified(i).call();
          if (!notVer) {
            unVerified.push(i);
          }
        })
      );

      await Promise.all(
        unVerified.map(async (e) => {
          const land = await Land.methods.UserMapping(e).call();
          setLoading(false);
          setArr((arr) => [...arr, land]);
        })
      );
      setLoading(false);
    };
    fetchData();
  }, [toggle]);

  const handleVerify = async (e) => {
    try {
      setLoading(true);
      await Land.methods.verifyUser(e.target.value).send({
        from: wadd
      });
      setArr([]);
      setToggle(!toggle);
    } catch (err) {
      console.log("Error in verifying user");
    } finally {
      setLoading(false);
    }
  };
  console.log(arr);

  return (
    <div className="co">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>User Name</th>
            <th>City</th>
            <th>Adhar Number</th>
            <th>Pan Number</th>
            <th>Document</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((el) => {
            return (
              <tr>
                <td>{el["name"]}</td>
                <td>{el["city"]}</td>
                <td>{el["aadharNumber"]}</td>
                <td>{el["panNumber"]}</td>
                <td>{el["document"]}</td>
                <td>{el["email"]}</td>
                <td>
                  <button
                    value={el["id"]}
                    onClick={(e) => handleVerify(e)}
                    className="btn btn-success"
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

export default VerifyUser;
