import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SocketContext } from "../../../context/SocketContext";
import { Land } from "../../../Contract/LandContract";
const Dashboard = () => {
  const { wadd } = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    const checkInspector = async () => {
      const isRegisteredInspecotr = await Land.methods
        .isLandInspector(wadd)
        .call();
      if (!isRegisteredInspecotr) {
        alert("You are not registered Inspector");
        window.location.reload();
        navigate("/");
      }
    };
    checkInspector();
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };
  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Name :"' +
        name +
        '" ,Age :"' +
        age +
        '" and Email :"' +
        designation +
        '"' +
        '" and designation" ' +
        city
    );
  };
  return (
    <div className="co">
      {/* <header>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Age:</label>
          <br />
          <input
            type="text"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
          <label>City:</label>
          <br />
          <input
            type="text"
            value={city}
            required
            onChange={(e) => {
              handleCityChange(e);
            }}
          />
          <br />
           */}
    </div>
  );
};

export default Dashboard;
