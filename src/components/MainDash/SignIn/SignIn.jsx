import "./SignIn.css";
import Logo from "./../../../images/pngegg.png";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const userLogin = () => {
    navigate("/user/Dashboard");
  };
  const inspectorLogin = () => {
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
        <button className="user-btn" onClick={(e) => userLogin()}>
          User
        </button>
        <button className="inspector-btn" onClick={(e) => inspectorLogin()}>
          Land Inspector
        </button>
        <button className="owner-btn" onClick={(e) => ownerLogin()}>
          Contract Owner
        </button>
      </div>
    </div>
  );
};

export default SignIn;
