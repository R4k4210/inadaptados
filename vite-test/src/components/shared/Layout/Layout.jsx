import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Header from "../../shared/Header";
import { HOME, PROFILE } from "../../../constants/routes";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={PROFILE} element={<Profile />} />
      </Routes>
    </>
  );
};

export default Layout;
