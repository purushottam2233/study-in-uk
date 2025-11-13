import React from 'react'
import { Link } from "react-router-dom";

// icons import 
import { IoIosArrowDown } from "react-icons/io";



function Aboutusnavbar() {
  return (
   <>
    <div className='aboutnavbar'>
    <nav className="navbar bg-white shadow-sm position-relative">
      <div className="container">

        {/* Nav Links (Always Visible) */}
        <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center w-100">

          {/* Dropdown 1 */}
          <li className="nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" href="#">
              Study in the UK  <IoIosArrowDown />
            </a>
            <ul className="dropdown-menu custom-dropdown below-navbar">
              
              <li><Link className="dropdown-item" to="/about/studyinuk/university" >Universities</Link></li>
              <li><Link className="dropdown-item" to="/about/studyinuk/courses">Courses</Link></li>
              <li><Link className="dropdown-item" to="/about/studyinuk/visainformation">Visa Information</Link></li>
              <li><Link className="dropdown-item" to="/about/studyinuk/visainformation">Finding somewhere to live</Link></li>
              <li><Link className="dropdown-item" to="/about/studyinuk/supportwhilestudy">Support while you study </Link></li>
              <li><Link className="dropdown-item" to="/about/studyinuk/EUstudentadvice">EU Student advice</Link></li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" href="#">
              Why the UK <IoIosArrowDown />
            </a>
            <ul className="dropdown-menu custom-dropdown below-navbar aboutpagebelownavbar">
              <li><Link className="dropdown-item" to="/about/whytheuk/culture">Culture & Creativity Award 2025</Link></li>
              <li><Link className="dropdown-item" to="/about/whytheuk/educationsystum">Education System</Link></li>
              <li><a className="dropdown-item" href="/about/studyinuk/courses">Opportunities</a></li>
            </ul>
          </li>

          {/* Normal Links */}
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/about/scholarships">Scholarships</Link>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/about/studentlife">Student Life</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/about/movingtotheukforstudy">Moving to the Uk</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/about/whataboutafterthestudies">After the Studies</a>
          </li>
         

    
        </ul>

      </div>
    </nav>
        
    </div>
   
   
   </>
  )
}

export default Aboutusnavbar
