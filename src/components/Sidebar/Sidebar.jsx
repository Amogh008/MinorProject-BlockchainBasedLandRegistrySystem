import React, { useContext, useEffect } from "react";
import "./Sidebar.css";
import Logo from "./../../images/pngegg.png";
import { SidebarData } from "../data/UserSidebarData";
import { useNavigate } from "react-router";
import { SocketContext } from "../../context/SocketContext";

const Sidebar = () => {
  useEffect(() => {
    window.ethereum.on("accountsChanged", function (accounts) {
      setLoading(true);
      setDetect(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
  }, []);
  const { setLoading, setDetect, setWadd, selected, setSelected } = useContext(
    SocketContext
  );

  const navigate = useNavigate();
  const selectMenuItem = (index, newState) => {
    setSelected(index);
    if (newState === "Sign Out") {
      setLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      const route = newState.split(" ").join("");
      navigate("/user/" + route);
    }
  };
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt=""></img>
        <span>
          LAN<span>D-APP</span>
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => selectMenuItem(index, item.heading)}
            >
              <div className="Icon">
                <item.icon />
              </div>{" "}
              <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
