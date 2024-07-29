import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GuestRoutes from "./GuestRoutes";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
import UserRoutes from "./UserRoutes";
function AllRoutes() {
  const location = useLocation();
  const { globalState } = useGlobalState();
  
  const renderLayout = ()=>{
    if(globalState?.user?.user?.type !="person"){
      return <GuestRoutes />
    }else{
      return <UserRoutes/> 
    }
  }

  return (
    <div>
      {location.pathname != "/login" &&
        location.pathname != "/otp-verification" && <Header />}
        {renderLayout()}
      
      {location.pathname != "/login" &&
        location.pathname != "/otp-verification" && <Footer />}
    </div>
  );
}

export default AllRoutes;
