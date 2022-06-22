import React, { useEffect, useState } from "react";
import { Land } from "../../../Contract/LandContract";
const VerifyUser = () => {
  const [arr, setArr] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
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
          const user = await Land.methods.UserMapping(e).call();
          setArr([...arr, user]);
        })
      );
    };
    fetchData();
  }, []);

  const handleVerify = (e) => {
    alert(e.target.key);
  };
  console.log(arr);

  return (
    <div className="co">
      <table class="table table-striped table-dark">
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
                    key={el["id"]}
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
