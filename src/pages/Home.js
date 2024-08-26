import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection';
import AppPromationSection from '../components/AppPromationSection';
import JobsSliderList from '../components/JobsSliderList';
import SuccessfulPlacedCandidateList from '../components/SuccessfulPlacedCandidateList';
import RegionList from '../components/RegionList';
import JobOpeningInTopCompany from '../components/JobOpeningInTopCompany';
import CandidateNewsSlider from '../components/CandidateNewsSlider';
import NewsSlider from '../components/NewsSlider';
import {getOccupations, getCountriesForJobs} from "../services/info.service";
import {getInstituteList} from "../services/institute.service"
function Home() {
  const [departmentList, setDepartmentList]=useState([]);
  const [instituteList, setInstituteList]=useState([]);
  const [countryList, setCountryList] = useState([]);
  const getOccupationsListFunc = async ()=>{
    try {
      let response = await getOccupations();
      let occupations = response?.occupation?.map(item => ({
        label: item.occupation,
        value: item.id,
        img: "https://overseas.ai/storage/uploads/occupationImage/"+item.id+"/"+item.occuLgIcon
      }));
      setDepartmentList(occupations)
    } catch (error) {
      console.log(error)
    }
  }
  const getTrainingInsFunc = async ()=>{
    try {
      let response = await getInstituteList();
      let institute = response?.data?.map(item => ({
        label: item.instituteName,
        value: item.id,
        img: item.profileImageUrl=="https://overseas.ai/placeholder/institute.jpg" ?"/images/institute.png": item.profileImageUrl 
      }));
      setInstituteList(institute)
    } catch (error) {
      console.log(error)
    }
  }
  const getCountriesForJobsFunc = async () => {
    try {
      let response = await getCountriesForJobs();
      let countries = response?.countries?.map(item => ({
        label: item.name,
        value: item.id,
        img: `https://overseas.ai/storage/uploads/countryFlag/${item?.countryFlag}`
      }));
      setCountryList(countries);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getOccupationsListFunc();
    getTrainingInsFunc()
    getCountriesForJobsFunc()
  },[])
  return (
    <>
    <HeroSection data={departmentList}/>
    <JobsSliderList title="Job Opening In Top Countries" rounded={true} backgroundColor="#fff" data={countryList} />
    <JobsSliderList title="Find Jobs By Department" rounded={true} backgroundColor="#F8F9FA" data={departmentList}/>
    <JobOpeningInTopCompany/>
    <JobsSliderList title="Meet Our Institutes"  rounded={false} backgroundColor="#F8F9FA" data={instituteList}/>
    <AppPromationSection/>
    {/* <JobsSliderList title="Job Openings In Top Companies" backgroundColor="#F4FAFD" /> */}
    <SuccessfulPlacedCandidateList title="Find Jobs By Department" rounded={true} backgroundColor="#F4FAFD" />
    <NewsSlider/>
    </>
  )
}

export default Home