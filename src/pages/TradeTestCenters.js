import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { getInstituteRegistrationOtp, registerInstitute } from "../services/institute.service";

const validationSchema = Yup.object({
  instituteName: Yup.string().required("Required"),
  insPhone: Yup.string().required("Required"),
  countryCode: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  instituteRegistrationNo: Yup.string().required("Required"),
  affilatedBy: Yup.string().nullable(),
  insSince: Yup.date().nullable(),
  websiteLink: Yup.string().url("Invalid URL").nullable(),
  source: Yup.string().required("Required"),
  profileImage: Yup.mixed().required('Required'),
  instituteRegCert: Yup.mixed().required('Required'),
  instituteAddress: Yup.string().required("Required"),
  isTradeCenter: Yup.string().oneOf(["Yes", "No"], "Required").required("Required"),
  abroadAuthName: Yup.string(),
  indianAuthName: Yup.string(),
});

const initialValues = {
  instituteName: "",
  insPhone: "",
  countryCode: "+91",
  email: "",
  instituteRegistrationNo: "",
  affilatedBy: "",
  insSince: "",
  websiteLink: "",
  source: "",
  profileImage: null,
  instituteRegCert: null,
  instituteAddress: "",
  isTradeCenter: "Yes",
  abroadAuthName: "",
  indianAuthName: "",
};

function TradeTestCenter() {
  const [showBtn, setShowBtn] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobOtp, setMobOtp] = useState("");
  const [insPassworrd, setInsPassword] = useState("");

  const handleInstituteRegister = async (values) => {
    try {
      const formData = new FormData();
      for (let key in values) {
        if (values[key]) {
          formData.append(key, values[key]);
        }
      }
      formData.append("mobOtp", mobOtp);
      formData.append("insPassword", insPassworrd);
      let response = await registerInstitute(formData);
      if(response?.data?.message=="Account Registered Successfully!"){
        toast.success("Account Registered Successfully!")
      }else{
        toast.error(response.errors[0])
      }
    } catch (error) {
      console.log(error)
      toast.error("Internal Server Error")
    }
  };

  return (
    <div className="mt-5 pt-5">
      <div className="mt-5 pt-5 container">
        <div className="row mb-5 mt-3">
          
          <div className="col-md-8 col-12 my-auto ">
            <div className="shadow rounded bg-light p-md-4 p-3 m-md-3 m-0">
              <h3 className="mb-4">
                <i className="fa fa-education me-2"></i>Trade Testing Register
              </h3>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                  try {
                    let response = await getInstituteRegistrationOtp(values);
                    if (response?.message === "OTP sent successfully") {
                      toast.success("OTP sent successfully");
                      setShowOtpInput(true);
                      sessionStorage.setItem("registerFormData", JSON.stringify(values));
                    } else {
                      toast.error(response?.message);
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                {({ setFieldValue, values }) => (
                  <Form>
                    <div className="row">
                      <div className="col-6">
                        <label>Trade Testing Center Name</label>
                        <Field name="instituteName" className="form-control" />
                        <ErrorMessage
                          name="instituteName"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Official Phone Number</label>
                        <div className="d-flex">
                          <Field
                            name="countryCode"
                            className="form-control"
                            style={{ width: "17%" }}
                            as="select"
                          >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                          </Field>
                          <Field
                            name="insPhone"
                            className="form-control"
                            style={{ width: "83%" }}
                          />
                        </div>
                        <ErrorMessage
                          name="insPhone"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Email</label>
                        <Field name="email" className="form-control" />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Registration Number</label>
                        <Field
                          name="instituteRegistrationNo"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="instituteRegistrationNo"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Affiliated By</label>
                        <Field name="affilatedBy" className="form-control" />
                        <ErrorMessage
                          name="affilatedBy"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Establishment Date</label>
                        <Field
                          name="insSince"
                          type="date"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="insSince"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Website Link</label>
                        <Field name="websiteLink" className="form-control" />
                        <ErrorMessage
                          name="websiteLink"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>How did you hear about us?</label>
                        <Field
                          name="source"
                          className="form-control"
                          as="select"
                        >
                          <option value="">Select</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Google">Google</option>
                          <option value="Friend">Friend</option>
                          <option value="Call">Call</option>
                          <option value="Poster">Poster</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage
                          name="source"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Upload Trade Testing Logo</label>
                        <input
                          name="profileImage"
                          type="file"
                          className="form-control"
                          onChange={(e) => setFieldValue("profileImage", e.target.files[0])}
                        />
                        <ErrorMessage
                          name="profileImage"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Upload Trade Testing Certificate</label>
                        <input
                          name="instituteRegCert"
                          type="file"
                          className="form-control"
                          onChange={(e) => setFieldValue("instituteRegCert", e.target.files[0])}
                        />
                        <ErrorMessage
                          name="instituteRegCert"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      <div className="col-6">
                        <label>Is Trade Center</label>
                        <Field
                          name="isTradeCenter"
                          as="select"
                          className="form-control"
                        >
                          <option value="">Select</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                        </Field>
                        <ErrorMessage
                          name="isTradeCenter"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      {values.isTradeCenter === "Yes" && (
                        <>
                          <div className="col-6">
                            <label>Authorising agency from Abroad</label>
                            <Field
                              name="abroadAuthName"
                              as="select"
                              className="form-control"
                            >
                              <option value="">Select</option>
                              <option value="Takomal Holding">Takomal Holding</option>
                              <option value="Americal welding society">Americal welding society</option>
                              <option value="Other">Other</option>
                            </Field>
                            <br />
                          </div>
                          <div className="col-6">
                            <label>Authorising agency from India</label>
                            <Field
                              name="indianAuthName"
                              as="select"
                              className="form-control"
                            >
                              <option value="">Select</option>
                              <option value="NSDC">NSDC</option>
                              <option value="Other">Other</option>
                            </Field>
                            <br />
                          </div>
                        </>
                      )}
                      <div className="col-12">
                        <label>Address</label>
                        <Field
                          name="instituteAddress"
                          as="textarea"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="instituteAddress"
                          component="div"
                          className="text-danger"
                        />
                        <br />
                      </div>
                      {showOtpInput && (
                        <>
                        <div className="col-12">
                          <input
                            placeholder="Enter OTP"
                            onChange={(e) => setMobOtp(e.target.value)}
                            className="form-control mb-4"
                          />
                        </div>
                        <div className="col-12">
                        <input
                          placeholder="Enter Password"
                          onChange={(e) => setInsPassword(e.target.value)}
                          className="form-control mb-4"
                          type="password"
                        />
                      </div>
                      </>
                      )}
                      <div className="col-12">
                        <div className="align-items-center d-flex mb-3 justify-content-center">
                          <Field
                            type="checkbox"
                            name="agreeTerms"
                            checked={showBtn}
                            onChange={(e) => setShowBtn(e.target.checked)}
                          />
                          <span
                            className="ms-2"
                            style={{
                              fontWeight: "500",
                              position: "relative",
                              bottom: "2px",
                            }}
                          >
                            I agree to the terms and conditions.
                          </span>
                        </div>
                        {showOtpInput ? (
                          <button
                            type="button"
                            className={"btn btn-primary btn-md w-100"+ ((mobOtp && insPassworrd ) ? " ":" disabled" )}
                            onClick={() => handleInstituteRegister(values)}
                          >
                            Register
                          </button>
                        ) : (
                          <button
                            className={`btn btn-primary btn-md w-100 ${showBtn ? "" : "disabled"}`}
                            type="submit"
                          >
                            Send OTP
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-md-4">
            <img src="/images/fullMobileNew.png" alt="Institute" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TradeTestCenter;
