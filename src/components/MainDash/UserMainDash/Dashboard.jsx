import React, { useEffect, useState } from "react";
import { Land } from "./../../../Contract/LandContract";

import { web3 } from "./../../../Contract/LandContract";
import "./Dashboard.css";
const Dashboard = () => {
  useEffect(() => {
    const checkManager = async () => {
      const accounts = await web3.eth.getAccounts();

      const verified = await Land.methods.isUserVerified(accounts[0]).call();
      if (verified) {
        const user = await Land.methods.UserMapping(accounts[0]).call();
        setName(user.name);
        setAge(user.age);
        setAdhar(user.aadharNumber);
        setPan(user.panNumber);
        setEmail(user.email);
        setCity(user.city);
      }
    };
    checkManager();
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [adhar, setAdhar] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAdharChange = (e) => {
    setAdhar(e.target.value);
  };

  const handlePanChange = (e) => {
    setPan(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Name :"' +
        name +
        '" ,Age :"' +
        age +
        '" and Email :"' +
        email +
        '"'
    );
  };
  return (
    <div className="App">
      <header>
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
          <label>Adhar Number:</label>
          <br />
          <input
            type="text"
            value={adhar}
            required
            onChange={(e) => {
              handleAdharChange(e);
            }}
          />
          <br />
          <label>Pan:</label>
          <br />
          <input
            type="text"
            value={pan}
            required
            onChange={(e) => {
              handlePanChange(e);
            }}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </header>
    </div>
  );
};
export default Dashboard;
