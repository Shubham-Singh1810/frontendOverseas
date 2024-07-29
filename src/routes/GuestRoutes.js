import React from 'react'
import {Route, Routes, Navigate } from "react-router-dom"
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
import OtpVerification from '../pages/OtpVerification'
import PageNotFound from '../pages/PageNotFound'
import ResumeBuilding from '../pages/ResumeBuilding'
function GuestRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/jobs" element={<JobList/>}/>
        <Route path="/jobs/:filter" element={<JobList/>}/>
        <Route path="resume-building" element={<ResumeBuilding/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/job/:location/:title/:id" element={<JobDiscription/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/company/:id" element={<CampanyDetails/>}/>
        <Route path="/candidate-register-step2" element={<CandidateRegister/>}/>
        <Route path="/candidate-register" element={<CandidateSignUp/>}/>
        <Route path="/otp-verification" element={<OtpVerification/>}/>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default GuestRoutes