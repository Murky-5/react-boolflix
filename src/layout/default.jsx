import { Outlet } from "react-router-dom";
import Header from "../pages/header";
import Main from "../pages/main";
export default () => (
  <>
    <Header />
    <Outlet />
    <Main />
  </>
);
