import "./SignIn.css";
import Logo from "./../../../images/pngegg.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../../../context/SocketContext";
import web3 from "./../../../web3";
const SignIn = () => {
  const { setLoggedIn, setClient } = useContext(SocketContext);
  const navigate = useNavigate();
  const userLogin = async () => {
    await web3.eth.getAccounts();
    setLoggedIn(true);
    setClient("user");

    navigate("/user/Dashboard");
  };
  const inspectorLogin = async () => {
    await web3.eth.getAccounts();
    setLoggedIn(true);
    setClient("inspector");

    navigate("/inspector/Dashboard");
  };
  const ownerLogin = () => {
    navigate("/user/Dashboard");
  };
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
        <button className="owner-btn btn-grad" onClick={(e) => ownerLogin()}>
          Contract Owner
        </button>
      </div>
    </div>
  );
};

export default SignIn;
