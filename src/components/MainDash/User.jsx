import { Outlet } from "react-router";
import Sidebar from "./../Sidebar/Sidebar";
import MainDash from "./MainDash";
const User = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default User;
