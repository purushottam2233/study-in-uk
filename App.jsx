import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'



import './assets/midia.css'
import Header from '../public/Component/Header';
import Footer from '../public/Component/Footer'
import Home from './PAGES/Home'
import Food from './PAGES/Food'
import Religion from './PAGES/Religion'
import Weather from './PAGES/Weather'
import Login from './PAGES/Login'
import Contact from './PAGES/Contact'
import Newslatter from '../public/Component/Newslatter';
import Aboutus from './PAGES/Aboutus';
import Schoolershipform from '../public/Component/Schoolershipform';
import University from './PAGES/ABOUTPAGE/University';
import Courses from './PAGES/ABOUTPAGE/Courses';
import Visainformation from './PAGES/ABOUTPAGE/Visainformation';
import Supportwhileyoustudy from './PAGES/ABOUTPAGE/Supportwhileyoustudy';
import Eustudentadvice from './PAGES/ABOUTPAGE/Eustudentadvice';
import CultureCreativityAward2025 from './PAGES/ABOUTPAGE/CultureCreativityAward2025';
import UKEducationSystemPage from './PAGES/ABOUTPAGE/UKEducationSystemPage';
import StudentlifeinUk from './PAGES/ABOUTPAGE/StudentlifeinUk';
import MovingToUkforstudy from './PAGES/ABOUTPAGE/MovingToUkforstudy';





function App() {

   

  return (
    <>

 <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/about/food" element={<Food />} />
        <Route path="/about/religion" element={<Religion/>} />
        <Route path="/about/weather" element={<Weather />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        

        
        {/* about page  */}

        <Route path="/about/studyinuk/university" element={<University/>} />
        <Route path="/about/studyinuk/courses" element={<Courses/>} />
         <Route path="/about/studyinuk/visainformation" element={<Visainformation/>} />
        <Route path="/about/studyinuk/supportwhilestudy" element={<Supportwhileyoustudy/>} />
         <Route path="/about/studyinuk/EUstudentadvice" element={<Eustudentadvice/>} /> 
        <Route path="/about/whytheuk/culture" element={<CultureCreativityAward2025/>} />
        <Route path="/about/whytheuk/educationsystum" element={<UKEducationSystemPage/>} />
        <Route path="/about/studentlife" element={<StudentlifeinUk/>} />
        <Route path="/about/movingtotheukforstudy" element={<MovingToUkforstudy/>} />
        <Route path="/about/whataboutafterthestudies" element={<StudentlifeinUk/>} />




        <Route path="/about/scholarships" element={<Schoolershipform />} />

      </Routes>
      <Newslatter/>
      <Footer/>
    </BrowserRouter>


  
   

    </>
  )
}

export default App
