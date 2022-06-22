import React, { useEffect, useState } from "react";
const VerifyLands = () => {
  const [arr, setArr] = useState([]);
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
                    disabled={el["action"]}
                    className={
                      el["action"]
                        ? "btn btn-outline-primary"
                        : "btn btn-primary"
                    }
                  >
                    {!el["action"] ? "Verify" : "Verified"}
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
