import React, { useCallback, useContext, useEffect, useState } from "react";
import "./AddLands.css";
import { Land } from "./../../../Contract/LandContract";

import { web3 } from "./../../../Contract/LandContract";
import { SocketContext } from "../../../context/SocketContext";
const AddLands = () => {
  const { setLoading, wadd } = useContext(SocketContext);

  useEffect(() => {
    const getAcc = async () => {};
    getAcc();
  }, []);
  const [Area, setArea] = useState();
  const [Address, setAddress] = useState("");
  const [LandPrice, setLandPrice] = useState();
  const [PID, setPID] = useState();
  const [SurveyNo, setSurveyNo] = useState("");
  const [AllLatiLongi, setAllLatiLongi] = useState("");
  const [Document, setDocument] = useState("");
  const addMyLand = (e) => {};
  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleLandPriceChange = (e) => {
    setLandPrice(e.target.value);
  };

  const handlePIDChange = (e) => {
    setPID(e.target.value);
  };

  const handleSurveyNoChange = (e) => {
    setSurveyNo(e.target.value);
  };
  const handelAllLatiLongiChange = (e) => {
    setAllLatiLongi(e.target.value);
  };

  const handelDocumentChange = (e) => {
    setDocument(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      Area <= 0 ||
      PID <= 0 ||
      LandPrice <= 0 ||
      SurveyNo.trim() === "" ||
      AllLatiLongi.trim() === "" ||
      Document.trim() === "" ||
      Address.trim() === ""
    ) {
      alert("Fill all feilds to procees");
      setLoading(false);
    } else {
      try {
        await Land.methods
          .addLand(
            Area.trim(),
            Address.trim(),
            LandPrice,
            AllLatiLongi.trim(),
            PID,
            SurveyNo.trim(),
            Document.trim()
          )
          .send({
            from: wadd
          });
        setLoading(false);
        alert("Added land");
      } catch (e) {
        alert("Error in adding land try again..check balance");
        setLoading(false);
      } finally {
        setArea(0);
        setLandPrice(0);
        setPID(0);
        setDocument("");
        setSurveyNo("");
        setAllLatiLongi("");
        setAddress("");
      }
    }
  };
  return (
    <div className="co">
      <header>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Area(SqFt):</label>
          <br />
          <input
            type="number"
            placeholder=""
            value={Area}
            required
            onChange={(e) => {
              handleAreaChange(e);
            }}
          />
          <br />
          <label>Address:</label>
          <br />
          <input
            type="text"
            value={Address}
            required
            onChange={(e) => {
              handleAddressChange(e);
            }}
          />
          <br />
          <label>Land Price:</label>
          <br />
          <input
            type="number"
            value={LandPrice}
            placeholder=""
            required
            onChange={(e) => {
              handleLandPriceChange(e);
            }}
          />
          <br />
          <label>PID:</label>
          <br />
          <input
            type="number"
            placeholder=""
            value={PID}
            required
            onChange={(e) => {
              handlePIDChange(e);
            }}
          />
          <br />
          <label>AllLatiLongi:</label>
          <br />
          <input
            type="text"
            value={AllLatiLongi}
            required
            onChange={(e) => {
              handelAllLatiLongiChange(e);
            }}
          />
          <br />
          <label>Survey Number:</label>
          <br />
          <input
            type="text"
            value={SurveyNo}
            placeholder=""
            required
            onChange={(e) => {
              handleSurveyNoChange(e);
            }}
          />
          <br />
          <label>Document:</label>
          <br />
          <input
            type="text"
            value={Document}
            required
            onChange={(e) => {
              handelDocumentChange(e);
            }}
          />
          <br />

          <input type="submit" value="Add" onClick={(e) => addMyLand(e)} />
        </form>
      </header>
    </div>
  );
};

export default AddLands;
