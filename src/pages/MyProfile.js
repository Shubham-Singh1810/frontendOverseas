import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
function MyProfile() {
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalState();
  const logoutFunc = ()=>{
    localStorage.removeItem("loggedUser");
    navigate("/");
    setTimeout(()=>{
        window.location.reload()
    }, 500)
  }
  return <div className="vh-100 bg-info d-flex justify-content-center align-items-center">
    <div>
        <button className="btn btn-danger" onClick={()=>logoutFunc()}>Logout</button>
    </div>
  </div>;
}

export default MyProfile;
