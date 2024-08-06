import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../pages/Home'
import JobList from '../pages/JobList'
import JobDiscription from '../pages/JobDescription'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import Login from '../pages/Login'
import Companies from '../pages/Companies'
import CampanyDetails from '../pages/CampanyDetails'
import CandidateRegister from '../pages/CandidateRegister'
import CandidateSignUp from '../pages/CandidateSignUp'
import EmployerSignUp from '../pages/EmployerSignUp'
import InstituteSignUp from '../pages/InstituteSignUp'
import PartnerSignUp from '../pages/PartnerSignUp'
import OtpVerification from '../pages/OtpVerification'
import MyProfile from '../pages/MyProfile'
import PageNotFound from '../pages/PageNotFound'
import ResumeBuilding from "../pages/ResumeBuilding"
import Institutes from '../pages/Institutes'
import TradeTestCenters from '../pages/TradeTestCenters'
import TrainingInstitute from '../pages/TrainingInstitute'
import TradeTestingList from '../pages/TradeTestingList'
import CourseDetails from '../pages/CourseDetails'
import TradeTestCourseDetails from '../pages/TradeTestCourseDetails'
function UserRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/jobs" element={<JobList/>}/>
        <Route path="/jobs/:filter" element={<JobList/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/job/:location/:title/:id" element={<JobDiscription/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/institutes" element={<Institutes/>}/>
        <Route path="/trade-test-center" element={<TradeTestCenters/>}/>
        <Route path="/company/:id" element={<CampanyDetails/>}/>
        <Route path="/candidate-register-step2" element={<CandidateRegister/>}/>
        <Route path="/candidate-register" element={<CandidateSignUp/>}/>
        <Route path="/otp-verification" element={<OtpVerification/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/resume-building" element={<ResumeBuilding/>}/>
        <Route path="/training-institute" element={<TrainingInstitute/>}/>
        <Route path="/trade-testing-institute" element={<TradeTestingList/>}/>
        <Route path="/course-details/:id" element={<CourseDetails/>}/>
        <Route path="/test-details/:id" element={<TradeTestCourseDetails/>}/>
        
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default UserRoutes