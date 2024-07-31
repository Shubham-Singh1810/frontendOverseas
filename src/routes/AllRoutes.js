import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GuestRoutes from "./GuestRoutes";
import UserRoutes from "./UserRoutes";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";

function AllRoutes() {
  const location = useLocation();
  const { globalState } = useGlobalState();
  console.log("from all routes", location.pathname);
  const renderLayout = () => {
    if (globalState?.user?.user?.type !== "person") {
      return <GuestRoutes />;
    } else {
      return <UserRoutes />;
    }
  };

  const showHeaderAndFooter = !["/login", "/otp-verification"].includes(
    location.pathname
  );

  return (
    <div>
      {showHeaderAndFooter && <Header />}
      {renderLayout()}
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default AllRoutes;
