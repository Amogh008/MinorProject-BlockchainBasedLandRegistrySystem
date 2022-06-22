import "./SignIn.css";
import Logo from "./../../../images/pngegg.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../../../context/SocketContext";
import { web3, Land } from "./../../../Contract/LandContract";
const SignIn = () => {
  const {
    setLoggedIn,
    setWadd,
    setIsUser,
    setIsInspector,
    setLoading
  } = useContext(SocketContext);
  const navigate = useNavigate();
  const userLogin = async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = await web3.eth.getAccounts();
        setLoading(false);
        setWadd(address[0]);
        setIsUser(true);
        setLoggedIn(true);
      } catch (err) {
        setLoading(false);
        alert("Connect to metamask account");
      }

      navigate("/user/Dashboard");
    } else {
      alert("Install meta mask");
    }
  };
  const inspectorLogin = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = await web3.eth.getAccounts();
        const isOk = await Land.methods.isLandInspector(address[0]).call();
        if (!isOk) {
          alert("Not registered Inspector");
          window.location.reload();
        } else {
          setWadd(address[0]);
          setIsInspector(true);
          setLoggedIn(true);
          navigate("/inspector/Dashboard");
        }
      } catch (err) {
        alert("Please connect the meatmask wallet ");
      }
    } else {
      alert("Install meta mask");
    }
  };
  // const ownerLogin = async () => {
  //   if (window.ethereum) {
  //     try {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       setLoggedIn(true);

  //     } catch (err) {
  //       alert("Please connect the meatmask wallet ");
  //     }

  //     navigate("/inspector/Dashboard");
  //   } else {
  //     alert("Install meta mask");
  //   }
  // };
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt=""></img>
        <span>
          LAN<span>D-APP</span>
        </span>
      </div>

      <div className="login-btn">
        <div className="info">Login as :</div>
        <button className="user-btn btn-grad" onClick={(e) => userLogin()}>
          User
        </button>
        <button
          className="inspector-btn btn-grad"
          onClick={(e) => inspectorLogin()}
        >
          Land Inspector
        </button>
        {/* <button className="owner-btn btn-grad" onClick={(e) => ownerLogin()}>
          Contract Owner
        </button> */}
      </div>
    </div>
  );
};

export default SignIn;
