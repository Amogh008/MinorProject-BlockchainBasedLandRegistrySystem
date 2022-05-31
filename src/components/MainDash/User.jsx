import { Outlet } from "react-router";
import Sidebar from "./../Sidebar/Sidebar";
const User = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default User;
