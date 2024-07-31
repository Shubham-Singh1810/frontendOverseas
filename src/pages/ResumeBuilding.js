import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ResumeBuilding() {
  const downloadPDF = () => {
    const input = document.getElementById("resume-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = "http://localhost:3000/images/templetBackground.jpeg";
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, []);
  // Image URL
  // const imageUrl =
  //   "https://overseasdata.s3.ap-south-1.amazonaws.com/EmpData/2/3/OV1123396/photo.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240730%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240730T123908Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=f66e40b70c31cc11a602abd5e3f973c527b3834afebd1dcdf41b6b794e8cb5d4";

  return (
    <div className="">
      <div className="mt-5 pt-5">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-lg-3 row">
              <div className="col-12">
                <div className="shadow-sm mb-3 rounded border">
                  <h5 className="p-4 mb-0">
                    <i className="fa fa-user me-1"></i> Personal Information
                  </h5>
                </div>
                <div className="shadow-sm mb-3 rounded border">
                  <h5 className="p-4 mb-0">
                    <i className="fa fa-suitcase me-1"></i> Work Experience
                  </h5>
                </div>
                <div className="shadow-sm mb-3 rounded border">
                  <h5 className="p-4 mb-0">
                    <i className="fa fa-graduation-cap me-1"></i> Education
                  </h5>
                </div>
                <div className="shadow-sm mb-3 rounded border">
                  <h5 className="p-4 mb-0">
                    <i className="fa fa-code me-1"></i> Skills
                  </h5>
                </div>
                <div className="shadow-sm mb-3 rounded border">
                  <h5 className="p-4 mb-0">
                    <i className="fa fa-language me-1"></i> Languages
                  </h5>
                </div>
                <div className="mb-3 mt-3">
                  <button className="btn btn-primary" onClick={downloadPDF}>
                    Download as PDF
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 rounded border mb-5"
              id="resume-content"
              style={{
                backgroundImage: "url(/images/templetBackground.jpeg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: imageDimensions.height,
              }}
            >
              <div className="px-2 py-5">
                {/* heading start */}
                <div className="d-flex justify-content-between ">
                  <div className="d-flex align-items-center">
                    <div
                    >
                      <img
                        style={{
                          height: "150px",
                          width: "150px",
                          borderRadius: "50%",
                        }}
                        className="border shadow-lg"
                        src="https://overseasdata.s3.ap-south-1.amazonaws.com/EmpData/2/3/OV1123396/photo.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240731%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240731T053519Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=09911f595027d27fc323ffcd64d981dfa3e8f01e641b9c92e034624bff524e65"
                      />
                    </div>
                    <div className="ms-3">
                      <h2 className="mb-0">Amit Jha</h2>
                      <h5>Driver / Operator - Dumper Driver</h5>
                    </div>
                  </div>
                  <div className="">
                    <img
                      src="/images/appQR.png"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </div>
                </div>
                {/* heading end */}

                {/* body start */}
                <div className="row">
                  <div className="col-6">
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h4 className="mb-0 ms-1 textBlue">
                            Address & Contact Details
                          </h4>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">P.S - Unknown</h5>
                        <h5 className="mb-1">Dist - Chandigarh</h5>
                        <h5 className="mb-1">State - Chandigarh (CH)</h5>
                        <h5 className="mb-1">Phone Number : +91 9708077542</h5>
                        <h5 className="mb-1">Email : 1108jhaamit@gmail.com</h5>
                      </div>

                      {/* address end */}
                    </div>
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h4 className="mb-0 ms-1 textBlue">Personal Info</h4>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">Dob : 2024-04-02 (0 Years)</h5>
                        <h5 className="mb-1">Gender : Male</h5>
                        <h5 className="mb-1">
                          Language Known : Hindi, English,
                        </h5>
                        <h5 className="mb-1">Marital Status : Married</h5>
                      </div>

                      {/* address end */}
                    </div>
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h4 className="mb-0 ms-1 textBlue">
                            Educational Info
                          </h4>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">✔ Post Graduate</h5>
                        <h5 className="mb-1">
                          ✔ Any other Vocational Training (one year or above)
                        </h5>
                      </div>

                      {/* address end */}
                    </div>
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h4 className="mb-0 ms-1 textBlue">
                            Passport Details
                          </h4>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">Passport Number : PaXXXXXX</h5>
                        <h5 className="mb-1">Passport Category : ECR</h5>
                        <h5 className="mb-1">
                          Passport Issue Date : 2005-05-30
                        </h5>
                        <h5 className="mb-1">Passport Exp Date : 2024-05-30</h5>
                      </div>

                      {/* address end */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h4 className="mb-0 ms-1 textBlue">Work Experince</h4>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">
                          <b>Tata Consultancy Private Limited</b>
                        </h5>
                        <h5 className="mb-1">
                          2023-11-01 - 2024-02-04 ( 3 Months )
                        </h5>
                        <h5 className="mb-1">
                          Fabrication and Welding - Argon Welder
                        </h5>
                        <h5 className="mb-1">State - Bihar (BR)</h5>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">
                          <b>Ritzyware</b>
                        </h5>
                        <h5 className="mb-1">
                          2020-08-26 - 2024-02-08 ( 41 Months )
                        </h5>
                        <h5 className="mb-1">
                          Driver / Operator - E.O.T Crane Operator
                        </h5>
                        <h5 className="mb-1">State - Arunachal Pradesh (AR)</h5>
                      </div>
                      {/* address end */}
                    </div>
                    <div className=" mt-5">
                      {/* address start */}
                      <div className="d-flex align-items-center">
                        <div
                          style={{ height: "20px", width: "4px" }}
                          className="bgBlue"
                        ></div>
                        <div>
                          <h5 className="mb-0 ms-1 textBlue">
                            Driving Details
                          </h5>
                        </div>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-1">
                          <b>Licence Number - OvXXXXXX</b>
                        </h5>
                        <h5 className="mb-1">2024-04-09 - 2024-04-27</h5>
                        <h5 className="mb-1">State - Bihar (BR)</h5>
                      </div>

                      {/* address end */}
                    </div>
                  </div>
                </div>
                {/* body end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilding;
