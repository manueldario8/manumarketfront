import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default MainLayout;
