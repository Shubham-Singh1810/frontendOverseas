import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { addContactQuery } from "../services/user.service";
import { useNavigate } from "react-router-dom";

function Contactus() {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({
    user_name: "",
    contact: "",
    subject: "",
    query: "",
  });
  // const handleContactSubmit = async () => {
  //   if (
  //     contactForm.user_name &&
  //     contactForm.contact &&
  //     contactForm.subject &&
  //     contactForm.query
  //   ) {
  //     if (contactForm.contact.length != 10) {
  //       toast.error("Please enter a valid phone number");
  //       return;
  //     }
  //     try {
  //       let response = await addContactQuery(contactForm);
  //       if (response.data.message == "Your query submitted successfully!") {
  //         toast.success("Your query submitted successfully!");
  //         setTimeout(() => {
  //           setContactForm({
  //             user_name: "",
  //             contact: "",
  //             subject: "",
  //             query: "",
  //           });
  //           navigate("/");
  //         }, 1500);
  //       } else {
  //         toast.error("Something went wrong");
  //       }
  //     } catch (error) {
  //       toast.error("Internal Server Error");
  //     }
  //   } else {
  //     toast.error("All fields are required");
  //   }
  // };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 22.587793268138633,
      lng: 88.40076123612282,
    },
    zoom: 15,
  };
  return (
    <div className="container contactUsHeight mt-md-5 d-flex align-items-center" >
      <div className="row mx-0  mt-5 pt-3 pt-md-5">
        <div className="col-md-6 col-12 order-lg-2 order-1 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2354758400895!2d88.40076123612282!3d22.587793268138633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276754e7c9489%3A0x66ada39be5c2da58!2sCA-191%2C%20CA%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700136!5e0!3m2!1sen!2sin!4v1667212481498!5m2!1sen!2sin"
            width="100%"
            height={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 col-12   order-lg-1 order-2">
          <div className="">
            <h4 className="text-center textBlue mt-lg-5 mt-4 mt-md-0">
              Contact Us
            </h4>
            <div className="row mt-3">
              <div className="col-md-6 p-0 m-0 d-flex justify-content-center   col-12">
                <input
                  className="form-control  py-2 mx-2 my-2 width95 "
                  value={contactForm.user_name}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      user_name: e.target.value,
                    })
                  }
                  placeholder="Enter Name*"
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="col-md-6 p-0 m-0 d-flex justify-content-center col-12">
                <input
                  className="form-control  p-2 mx-2 my-2 width95"
                  type="number"
                  value={contactForm.contact}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      contact: e.target.value,
                    })
                  }
                  placeholder="Enter Phone No.*"
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="p-0 m-0  d-flex justify-content-center col-12">
                <input
                  className="form-control  py-2 mx-2 my-2 width95"
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Subject*"
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="p-0 d-flex justify-content-center  m-0 col-12">
                <textarea
                  className="form-control  py-2 mx-2 my-2 width95"
                  value={contactForm.query}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, query: e.target.value })
                  }
                  rows={5}
                  placeholder="Message*"
                  style={{ borderRadius: "0px" }}
                />
              </div>
              <div className="col-12 m-0 d-flex justify-content-center justify-content-lg-end p-0">
                <button
                  className="btn shadow mt-lg-3 mt-2 mb-md-5 mb-2 me-lg-2 w-100 mx-2  btn-primary bgBlue"
                  style={{
                    borderRadius: "25px",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 row p-0 ms-1 ms-md-0 order-3 mt-md-5 mt-0">
          <div className="col-md-6 col-lg-3 col-12">
            <div className="bg-light my-3  px-4 py-2 rounded shadow border">
              <h2 className="textBlue">
                <i className="fa fa-map-marker"></i>
              </h2>
              <h5 className=" fontMono">
                {" "}
                <b>Address</b>
              </h5>
              <p>
                <i className="fa fa-address-card me-2"></i> CA 191, CA Block,
                Sector 1, Saltlake, Kolkata,
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-12">
            <div className="bg-light my-3    px-4 py-2 rounded shadow border">
              <h2 className="textBlue">
                <i className="fa fa-phone"></i>
              </h2>
              <h5 className=" fontMono">
                {" "}
                <b>Call Us</b>
              </h5>
              <p>
                {" "}
                <a
                  className="text-dark text-decoration-none"
                  href="tel:1800 890 4788"
                >
                  {" "}
                  <i className="fa fa-phone me-2"></i> 1800 890 4788
                </a>{" "}
                <br />
                <a
                  className="text-dark text-decoration-none"
                  href="https://wa.me/8100929525"
                  target="_blank"
                >
                  <i className="fa me-2 fa-whatsapp"></i>+91 8100929525
                </a>
                {/* <i className="fa fa-whatsapp me-2"></i> +91 9534404400 */}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-12">
            <div className="bg-light px-4 my-3  rounded shadow border" style={{padding:"11px"}}>
              <h2 className="textBlue">
                <i className="fa fa-envelope"></i>
              </h2>
              <h5 className=" fontMono">
                {" "}
                <b>Email Us</b>
              </h5>
              <p style={{ fontSize: "14px" }}>
                <a
                  className="text-dark text-decoration-none"
                  href="mailto:contact@overseas.ai"
                >
                  <i className="fa fa-envelope"></i> contact@overseas.ai
                </a>

                <br />
                <a
                  className="text-dark text-decoration-none"
                  href="mailto:info@overseas.ai"
                >
                  <i className="fa fa-envelope"></i> info@overseas.ai{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-12">
            <div className="bg-light px-4 my-3   py-2 rounded shadow border">
              <h2 className="textBlue">
                <i className="fa fa-clock-o"></i>
              </h2>
              <h5 className=" fontMono">
                {" "}
                <b>Open Hours</b>
              </h5>
              <p>
                <i className="fa fa-calendar me-1"></i> Monday-Saturday <br />
                <i className="fa fa-clock-o me-2"></i>07:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
