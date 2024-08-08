import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About Us",
      link: "",
    },
    {
      name: "Our Partners",
      link: "",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Labour Law",
      link: "",
    },
    {
      name: "Privacy Policy",
      link: "",
    },
    {
      name: "Terms & Conditions",
      link: "",
    },
  ];
  const socialLinks = [
    {
      link: "https://www.linkedin.com/company/findoverseasjobs?originalSubdomain=in",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://wa.me/8100929525",
      icon: "fa fa-whatsapp",
    },
    {
      link: "https://www.facebook.com/overseasdreamjobs",
      icon: "fa fa-facebook",
    },
    {
      link: "https://www.youtube.com/channel/UCbmM6NPRf89yYh5AAy0kuVg",
      icon: "fa fa-youtube",
    },
    {
      link: "https://www.instagram.com/overseas.aijobs/?igsh=MTgxdHhkcHdsdWd5YQ%3D%3D",
      icon: "fa fa-instagram",
    },
  ];
  return (
    <>
      <div
        className=" p-lg-5 px-0 py-5"
        style={{ background: "linear-gradient(to right, #17487f, #17487f, #17487f)" }}
      >
        <div className="px-lg-5 text-light">
          <div className="row m-0">
            <div className="col-lg-3">
              <div className="mx-3">
                <img
                  src="https://overseas.ai/frontend/logo/logo_en.gif"
                  className="img-fluid rounded mb-3"
                  style={{ height: "50px" }}
                />
                <p>
                  Overseas.ai links skilled individuals with employers globally,
                  emphasizing practical expertise over academic qualifications.
                  It uses technology to capture and organize videos of new
                  skills, creating trustworthy video profiles. This approach
                  allows employers to assess candidates' hands-on abilities
                  before hiring.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-3 my-lg-0 my-3">
                <h3>Contact Us</h3>
                <div>
                  <div className="mb-1 d-flex">
                    {" "}
                    <i className="fa fa-address-card mt-1 me-2"></i>
                    <span>
                      CA 191, CA Block, Sector 1, Saltlake, Kolkata, West Bengal
                      700064
                    </span>
                  </div>
                  <div className="mb-1">
                    <a
                      className="text-light text-decoration-none"
                      href="tel:+91 1800 890 4788"
                    >
                      {" "}
                      <i className="fa fa-phone me-2"></i>1800 890 4788
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      className="text-light text-decoration-none"
                      href="https://wa.me/9534404400"
                      target="_blank"
                    >
                      <i className="fa me-2 fa-whatsapp"></i>+91 8100929525
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      className="text-light text-decoration-none"
                      href="mailto:contact@overseas.ai"
                    >
                      {" "}
                      <i className="fa fa-envelope me-2"></i>{" "}
                      contact@overseas.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-3 my-lg-0 my-3">
                <h3 className="">Quick Links</h3>
                <div className="row m-0">
                  {quickLinks?.map((v, i) => {
                    return (
                      <p className="mb-0 p-0 col-6">
                        <Link
                          className="text-light"
                          style={{ textDecoration: "none" }}
                          to={v.link}
                        >
                          {v?.name}
                        </Link>
                      </p>
                    );
                  })}
                </div>
                <hr />
                <h3 className="">Join Our Social Network</h3>
                <div className="m-0 d-flex">
                  {socialLinks?.map((v, i) => {
                    return (
                      <h3>
                        <a target="blank" href={v?.link}>
                          <i
                           
                            className={`me-3 text-light  ${v?.icon}`}
                          ></i>
                        </a>
                      </h3>
                    );
                  })}

                  {/* <h3>
                    <a
                      className="text-secondary"
                      href="https://www.facebook.com/4400manish?mibextid=ZbWKwL"
                      target="blank"
                    >
                      <i className="fa me-3 fa-facebook"></i>
                    </a>
                  </h3>
                  <h3>
                    <a className="text-secondary" href="https://wa.me/9534404400" target="_blank">
                      <i className="fa me-3 fa-whatsapp"></i>
                    </a>
                  </h3> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-md-3 mx-0 my-lg-0 my-3">
                <div className=" px-2 rounded">
                  <h3 className="mb-1">Download Our App Now</h3>
                  {/* <div className=" d-flex justify-content-center my-3">
                    <div style={{ height: "150px", width: "150px" }}>
                      <img src="/images/appQR.png" className="img-fluid" />
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center ">
                    <div className="bg-light px-2 rounded" style={{ height: "50px", width: "150px" }}>
                      <img
                        src="https://overseas.ai/newfrontend/image/google-play.png"
                        className="img-fluid"
                      />
                    </div>
                  </div> */}
                  <div className="row justify-content-center mt-3">
                    <div className="col-6">
                      <img src="/images/appQR.png" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-6 my-auto">
                      <img
                        src="https://overseas.ai/newfrontend/image/google-play.png"
                        className="img-fluid px-2 py-1 rounded shadow bg-light"
                      />
                      <img
                        src="https://overseas.ai/newfrontend/image/google-play.png"
                        className="img-fluid px-2 py-1 mt-3 rounded shadow bg-light"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <p
        style={{
          fontSize: "18px",
          background: "linear-gradient(to right, #17487f, skyblue)",
        }}
        className="py-3 px-2 mb-0 text-center text-light"
      >
        <b>
          {" "}
          © 2021-2024 All Rights Reserved. Powered by Radiant in collaboration
          with IIT Kharagpur as Technology Partner.
        </b>
      </p>
    </>
  );
}

export default Footer;
