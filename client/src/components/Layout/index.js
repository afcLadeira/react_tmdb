import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
