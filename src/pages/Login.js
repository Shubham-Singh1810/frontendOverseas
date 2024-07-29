import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Optional: For validation schema
import { useNavigate, Link } from "react-router-dom";
import {loginUsingPassword} from "../services/user.service"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useGlobalState} from '../GlobalProvider';
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { globalState, setGlobalState} = useGlobalState();
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string().required("Mobile number is requird field"),
      password: Yup.string().required("Password is required field"),
    }),
    onSubmit: async(values) => {
      try {
        let response = await loginUsingPassword({empPhone:values.mobile, password:values.password});
        
        if(response.data.access_token){
          localStorage.setItem("loggedUser", JSON.stringify(response.data));
          toast.success("User Logged in successfully")
          setGlobalState({...globalState, user:response.data});
          setTimeout(()=>{
            navigate("/my-profile")
          }, 1000)
        }
        else{
          toast.error("Invalid Credientials")
        }
      } catch (error) {
        toast.error("Internal Server Error")
      }
    },
  });

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{background:"url(https://www.bacancytechnology.com/main/img/job-recruitment-portal-development/banner.jpg?v-1)",backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
      <div className="shadow-lg bg-light  p-5 ">
        <div
          className="bgBlue justify-content-end badge mb-4 "
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-arrow-left me-1"></i> <span to="/">Home</span>
        </div>
        <div className="text-center">
          <img src="https://overseas.ai/frontend/logo/logo_en.gif" alt="Logo" />
        </div>
        <h5 className="text-center mt-3 mb-4">Welcome Back</h5>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Phone</label>
            <div className="d-flex mb-3 mt-1">
              <select
                class="customSelect text-secondary form-control   "
                aria-label="Default select example"
                // style={{ borderRadius: "35px", padding: "12px" }}
                style={{
                  width: "20%",
                  borderRight: "none",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              >
                <option value="">+91</option>
                {[1, 2, 2]?.map((v, i) => {
                  return <option value="">+91</option>;
                })}
              </select>
              <input
                className="form-control "
                name="mobile"
                placeholder="Type your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
                style={{
                  width: "80%",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              />
            </div>
            {formik.touched.mobile && formik.errors.mobile ? (
              <div
                className="text-danger"
                style={{
                  fontSize: "12px",
                  marginTop: "-15px",
                  marginBottom: "10px",
                }}
              >
                {formik.errors.mobile}
              </div>
            ) : null}
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <label>Password</label>
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={showPassword ? "fa fa-eye-slash" : " fa fa-eye"}
                style={{ position: "relative", top: "3px" }}
              ></i>
            </div>

            <input
              className="form-control mb-3 mt-1"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Type your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
              <div
                className="text-danger"
                style={{
                  fontSize: "12px",
                  marginTop: "-15px",
                  marginBottom: "10px",
                }}
              >
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <p className="mt-2  " style={{ cursor: "pointer" }}>
            <b className="">Login Via OTP Verification</b>
          </p>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
          <p
            className="mt-5 mb-0 text-center"
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            Don't have any account ? <br /> <Link to="/candidate-register" >Create New</Link>
          </p>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
