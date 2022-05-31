import { Outlet } from "react-router";
import LandInspectorSiedbar from "./../Sidebar/LandInspectorSidebar";

const LandInspector = () => {
  return (
    <div>
      <LandInspectorSiedbar />
      <Outlet />
    </div>
  );
};

export default LandInspector;
