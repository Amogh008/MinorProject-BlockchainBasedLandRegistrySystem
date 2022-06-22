import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SocketContext } from "../../../context/SocketContext";
import { Land } from "./../../../Contract/LandContract";

import "./Dashboard.css";

const Dashboard = () => {
  const { wadd, setIsReg, setIsVer, isVer, isReg } = useContext(SocketContext);

  useEffect(() => {
    const checkManager = async () => {
      const registered = await Land.methods.isUserRegistered(wadd).call();
      if (registered) {
        const verified = await Land.methods.isUserVerified(wadd).call();
        const user = await Land.methods.UserMapping(wadd).call();
        setName(user.name);
        setAge(user.age);
        setAdhar(user.aadharNumber);
        setPan(user.panNumber);
        setEmail(user.email);
        setCity(user.city);
        setDocument(user.document);
        if (verified) {
          setIsReg(true);
          setIsVer(true);
        } else {
          setIsVer(false);
          setIsReg(true);
        }
      } else {
        setName("");
        setAge("");
        setAdhar("");
        setPan("");
        setEmail("");
        setCity("");
        setDocument("");
        setIsReg(false);
        setIsVer(false);
      }
    };
    checkManager();
  }, []);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [adhar, setAdhar] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
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

  const handleDocChange = (e) => {
    setDocument(e.target.value);
  };

  const handleAdharChange = (e) => {
    setAdhar(e.target.value);
  };

  const handlePanChange = (e) => {
    setPan(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      isNaN(age) ||
      city.trim() === "" ||
      email.trim() === "" ||
      adhar.trim().length !== 12 ||
      pan.trim().length !== 10 ||
      document.trim() === ""
    ) {
      alert("Enter correct values to proceed for registration");
    } else {
      try {
        await Land.methods
          .registerUser(
            name.trim(),
            parseInt(age),
            city.trim(),
            adhar.trim(),
            pan.trim(),
            document,
            email.trim()
          )
          .send({
            from: wadd
          });
        alert("User Added...login again");
        window.location.reload();
      } catch (err) {
        alert(err);
      }
    }
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
          <br />
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
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
          <br />
          <label>Document Link:</label>
          <br />
          <input
            type="text"
            value={document}
            required
            onChange={(e) => {
              handleDocChange(e);
            }}
          />
          <br />
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
          <br />
          <br />
          {!isReg && (
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className={"btn btn-primary"}
            >
              Submit
            </button>
          )}
          {isReg && isVer && (
            <button className={"btn btn-success"} disabled={true}>
              Verified
            </button>
          )}
          {isReg && !isVer && (
            <button className={"btn btn-danger"} disabled={true}>
              Verification Pending
            </button>
          )}
        </form>
      </header>
    </div>
  );
};
export default Dashboard;
