import React, { useState, useEffect } from "react";
import {
    getCountryCode,
    getSkillsByOccuId,
    getState,
    getDistrict,
    getPs,
    getOccupations,
    getPanchayat,
    getVillage,
    getCountries,
  } from "../../services/info.service";
// Define form fields and their properties

const CreateJobs = () => {
    const [skillList, setSkillList] = useState([]);
    const getSkillList = async (id) => {
      try {
        let response = await getSkillsByOccuId(id);
        console.warn(response);
        let skills = response?.skills?.map((item) => ({
          label: item.skill,
          value: item.id,
        }));
        setSkillList(skills);
      } catch (error) {}
    };
    const [countryList, setCountryList] = useState([]);
  const getListOfCountry = async () => {
    try {
      let response = await getCountries();
      let country = response.countries.map((item) => ({
        label: item.name,
        value: item.name,
      }));
      setCountryList(country);
    } catch (error) {}
  };
  const [occupations, setOccupations] = useState([]);
  const getOccupationList = async () => {
    try {
      let response = await getOccupations();
      let occupations = response?.occupation?.map((item) => ({
        label: item.occupation,
        value: item.id,
      }));
      setOccupations(occupations);
    } catch (error) {}
  };
  useEffect(() => {
    getOccupationList();
    getListOfCountry();
  }, []);
  

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobOccupation: "",
    jobSkill: "",
    companyName: "",
    jobLocationCountry: "",
    jobDeadline: "",
    jobVacancyNumber: "",
    jobWagesCurrencyType: "",
    salaryNegotiableStatus: "",
    passportType: "",
    serviceCharge: "",
    contract_period: "",
    expCerificateReq: "",
    DLReq: "",
    jobFullProfileCVReq: "",
    jobWorkVideoReq: "",
    jobExpReq: "",
    jobExpTypeReq: "",
    jobExpDuration: "",
    jobWorkingDay: "",
    jobWorkingHour: "",
    jobOvertime: "",
    jobFood: "",
    jobAccommodation: "",
    jobMedicalFacility: "",
    jobTransportation: "",
    jobAgeLimit: "",
    jobDescription: "",
    jobPhoto: null,
    hrName: "",
    hrEmail: "",
    hrNumber: "",
    companyJobID: "",
    languageRequired: "",
  });
 
  useEffect(() => {
    getSkillList(formData?.jobOccupation)
  }, [formData?.jobOccupation]);

  const handleOnChange = (e) => {
    const { name, value, type, files } = e.target;
  
    // Handle file input separately
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0] || null,
      }));
    } else if (type === "select-one") {
      // Handle select input
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Handle other input types (text, number, etc.)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const [errors, setErrors] = useState({});
  const formValidation = () => {
    const errors = {};

    // Validate required fields
    if (!formData.jobTitle.trim()) errors.jobTitle = "Job Title is required";
    if (!formData.jobOccupation)
      errors.jobOccupation =
        "Job Occupation is required and must be an integer";
    if (!formData.jobSkill.trim()) errors.jobSkill = "Job Skill is required";
    if (
      !formData.jobLocationCountry.trim() ||
      formData.jobLocationCountry.length > 100
    )
      errors.jobLocationCountry =
        "Job Location Country is required and must be less than 100 characters";
    if (!formData.jobDeadline.trim() || formData.jobDeadline.length > 100)
      errors.jobDeadline =
        "Job Deadline is required and must be less than 100 characters";
    if (
      !formData.jobVacancyNumber.trim() ||
      formData.jobVacancyNumber.length > 100
    )
      errors.jobVacancyNumber =
        "Job Vacancy Number is required and must be less than 100 characters";
    if (
      !formData.jobWagesCurrencyType.trim() ||
      formData.jobWagesCurrencyType.length > 100
    )
      errors.jobWagesCurrencyType =
        "Wages Currency Type is required and must be less than 100 characters";
    if (
      !formData.salaryNegotiableStatus.trim() ||
      formData.salaryNegotiableStatus.length > 100
    )
      errors.salaryNegotiableStatus =
        "Salary Negotiable Status is required and must be less than 100 characters";
    if (!formData.passportType.trim() || formData.passportType.length > 100)
      errors.passportType =
        "Passport Type is required and must be less than 100 characters";
    if (
      !formData.contract_period.trim() ||
      formData.contract_period.length > 100
    )
      errors.contract_period =
        "Contract Period is required and must be less than 100 characters";
    if (!formData.jobExpReq.trim() || formData.jobExpReq.length > 100)
      errors.jobExpReq =
        "Job Experience Requirement is required and must be less than 100 characters";
    if (!formData.jobWorkingDay.trim() || formData.jobWorkingDay.length > 100)
      errors.jobWorkingDay =
        "Job Working Day is required and must be less than 100 characters";
    if (!formData.jobWorkingHour.trim() || formData.jobWorkingHour.length > 100)
      errors.jobWorkingHour =
        "Job Working Hour is required and must be less than 100 characters";
    if (!formData.jobOvertime.trim() || formData.jobOvertime.length > 100)
      errors.jobOvertime =
        "Job Overtime is required and must be less than 100 characters";
    if (!formData.jobFood.trim() || formData.jobFood.length > 100)
      errors.jobFood =
        "Food Provision is required and must be less than 100 characters";
    if (
      !formData.jobAccommodation.trim() ||
      formData.jobAccommodation.length > 100
    )
      errors.jobAccommodation =
        "Accommodation is required and must be less than 100 characters";
    if (
      !formData.jobMedicalFacility.trim() ||
      formData.jobMedicalFacility.length > 100
    )
      errors.jobMedicalFacility =
        "Medical Facility is required and must be less than 100 characters";
    if (
      !formData.jobTransportation.trim() ||
      formData.jobTransportation.length > 100
    )
      errors.jobTransportation =
        "Transportation is required and must be less than 100 characters";
    if (!formData.jobAgeLimit.trim() || formData.jobAgeLimit.length > 100)
      errors.jobAgeLimit =
        "Age Limit is required and must be less than 100 characters";
    if (formData.jobDescription && formData.jobDescription.length > 500)
      errors.jobDescription =
        "Job Description must be less than 500 characters";
    if (
      formData.jobPhoto &&
      !["image/jpeg", "image/png"].includes(formData.jobPhoto.type)
    )
      errors.jobPhoto = "Job Photo must be a jpg or png image";
    if (formData.jobPhoto && formData.jobPhoto.size > 2048 * 1024)
      errors.jobPhoto = "Job Photo must be less than 2MB";
    if (formData.languageRequired.trim().length === 0)
      errors.languageRequired = "Language Required is required";

    // Additional nullable fields
    if (formData.companyName && formData.companyName.length > 100)
      errors.companyName = "Company Name must be less than 100 characters";
    if (formData.serviceCharge && formData.serviceCharge.length > 100)
      errors.serviceCharge = "Service Charge must be less than 100 characters";
    if (formData.expCerificateReq && formData.expCerificateReq.length > 100)
      errors.expCerificateReq =
        "Experience Certificate Requirement must be less than 100 characters";
    if (formData.DLReq && formData.DLReq.length > 100)
      errors.DLReq =
        "Driver's License Requirement must be less than 100 characters";
    if (
      formData.jobFullProfileCVReq &&
      formData.jobFullProfileCVReq.length > 100
    )
      errors.jobFullProfileCVReq =
        "Full Profile CV Requirement must be less than 100 characters";
    if (formData.jobWorkVideoReq && formData.jobWorkVideoReq.length > 100)
      errors.jobWorkVideoReq =
        "Work Video Requirement must be less than 100 characters";
    if (formData.jobExpTypeReq && formData.jobExpTypeReq.length > 100)
      errors.jobExpTypeReq =
        "Job Experience Type must be less than 100 characters";
    if (formData.jobExpDuration && formData.jobExpDuration.length > 100)
      errors.jobExpDuration =
        "Job Experience Duration must be less than 100 characters";
    if (formData.hrName && formData.hrName.length > 100)
      errors.hrName = "HR Name must be less than 100 characters";
    if (formData.hrEmail && !/^\S+@\S+\.\S+$/.test(formData.hrEmail))
      errors.hrEmail = "HR Email must be a valid email address";
    if (formData.hrNumber && formData.hrNumber.length > 100)
      errors.hrNumber = "HR Number must be less than 100 characters";
    if (formData.companyJobID && formData.companyJobID.length > 100)
      errors.companyJobID = "Company Job ID must be less than 100 characters";
    if (formData.jobArea && formData.jobArea.length > 100)
      errors.jobArea = "Job Area must be less than 100 characters";
    setErrors(errors);
    return Object.keys(errors).length === 0 ? true : errors;
  };

  const handleSubmit = () => {
    const validationErrors = formValidation();
    if (validationErrors === true) {
      console.log(formData);
    } else {
      console.log("Validation errors:", validationErrors);
    }
  };
  const formFields = [
    { name: "jobTitle", label: "Job Title", type: "text" },
    { name: "jobOccupation", label: "Job Department", type: "select" , options:[{label:"Select Department", value:""},...occupations]},
    { name: "jobSkill", label: "Job Skill (Multiple)", type: "select",  options:[{label:"Select Skill", value:""},...skillList]} ,
    { name: "companyName", label: "Actual Hiring Company", type: "text" },
    { name: "jobLocationCountry", label: "Job Location Country", type: "select" , options:[{label:"Select Country", value:""},...countryList]},
    { name: "jobDeadline", label: "Job Deadline", type: "date" },
    { name: "jobVacancyNumber", label: "Number Of Vacancy", type: "number" },
    {
      name: "jobWagesCurrencyType",
      label: "Wages Currency Type",
      type: "select",
    },
    {
      name: "salaryNegotiableStatus",
      label: "Salary Negotiable Status",
      type: "select",
    },
    { name: "passportType", label: "Passport Type", type: "select" },
    { name: "serviceCharge", label: "Service Charge", type: "number" },
    { name: "contract_period", label: "Contract Period", type: "text" },
    {
      name: "expCerificateReq",
      label: "Experience Certificate Requirement",
      type: "select",
    },
    { name: "DLReq", label: "Driver's License Requirement", type: "select" },
    {
      name: "jobFullProfileCVReq",
      label: "Full Profile CV Requirement",
      type: "select",
    },
    { name: "jobWorkVideoReq", label: "Work Video Requirement", type: "select" },
    { name: "jobExpReq", label: "Job Experience Requirement", type: "select" },
    { name: "jobExpTypeReq", label: "Job Experience Type", type: "select" },
    { name: "jobExpDuration", label: "Job Experience Duration", type: "text" },
    { name: "jobWorkingDay", label: "Job Working Day", type: "text" },
    { name: "jobWorkingHour", label: "Job Working Hour", type: "text" },
    { name: "jobOvertime", label: "Job Overtime", type: "text" },
    { name: "jobFood", label: "Food Provision", type: "text" },
    { name: "jobAccommodation", label: "Accommodation", type: "select" },
    { name: "jobMedicalFacility", label: "Medical Facility", type: "select" },
    { name: "jobTransportation", label: "Transportation", type: "select" },
    { name: "jobAgeLimit", label: "Age Limit", type: "number" },
    
    { name: "jobPhoto", label: "Job Photo", type: "file" },
    { name: "languageRequired", label: "Language Required", type: "select" },
    { name: "hrName", label: "HR Name", type: "text" },
    { name: "hrEmail", label: "HR Email", type: "email" },
    { name: "hrNumber", label: "HR Number", type: "text" },
    { name: "companyJobID", label: "Company Job ID", type: "text" },
    { name: "jobDescription", label: "Job Description", type: "textarea" },
  ];
  return (
    <div className="container mt-5 pt-5">
      <div className="mt-md-5 py-md-5 mb-5">
        <div className="row">
          {formFields.map((field) => (
            <div className="col-6  " key={field.name}>
              <div className="shadow-sm my-3 border rounded p-2 pb-4">
                <label className="mb-1 ms-1" style={{ fontWeight: "500" }}>
                  {field.label}
                </label>
                {field.type == "select" ? (
                  <select
                    className="form-control"
                    name={field.name}
                    value={formData.name}
                    onChange={handleOnChange}
                  >
                    {field?.options?.map((v) => {
                      return <option value={v?.value}>{v.label}</option>;
                    })}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    className="form-control"
                    value={formData[field.name]}
                    onChange={handleOnChange}
                  />
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    name={field.name}
                    className="form-control"
                    onChange={handleOnChange}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    className="form-control"
                    value={
                      field.type !== "number" ? formData[field.name] : undefined
                    }
                    onChange={handleOnChange}
                  />
                )}
                {errors[field.name] && (
                  <div className="text-danger mt-1">{errors[field.name]}</div>
                )}
              </div>
            </div>
          ))}
          <div className="col-12">
            <button
              className="btn btn-primary mt-5 w-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobs;
