import { Outlet } from "react-router-dom";
let IndexMain = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

export default IndexMain;
