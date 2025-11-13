import React from "react";
  import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logos">
            <a className="british-councial" href="">
              <img
                src="https://study-uk.britishcouncil.org/images/bc-logo-white.svg"
                alt=""
              />
            </a>
            <a href="">
              {" "}
              <hr />{" "}
            </a>
            <a className="navbar-brand" href="#">
              <img
                src="https://study-uk.britishcouncil.org/images/suk-great-logo.svg"
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">    
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
              
              <Link to="/" className="nav-link me-4  head-link" aria-current="page" 
                  
                
                  id="title">
                   Home
                
                </Link>
              </li>

              {/* aboutus page  */}

              <li className="nav-item">
                <Link    to="/about"
                  className="nav-link me-4 head-link"
                  aria-current="page"
                  href="#"
                  id="title">
                    About us
                
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link  me-4"
                 
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="about"
                >
                   <Link to="/about">About Us</Link>
                  
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                     <Link to="/about/food" className="head-link">Food</Link> 
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" id="action-anoter">
                      
                      <Link to="/about/religion" className="head-link">Religion</Link> 
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      
                      <Link to="/about/weather" className="head-link">Weather</Link>
                      
                    </a>
                  </li>
                </ul>
              </li> */}
   

              {/* contcat nav link  */}
              <li className="nav-item">
                <Link   to="/contact"
                  className="nav-link me-4 head-link"
                  aria-current="page"
                  href="#"
                  id="description"
                >
                   Contact us
                  
                </Link>
              </li>
            </ul>
            {/* <li className="language">
                            <label htmlFor="language-select"></label>
                            <select id="language-select">
                                <option value="en">English</option>
                                <option value="es">hindi</option>
                                <option value="fr">Français</option>
                            </select> */}
            {/* <select>
            
            </select> */}
            {/* </li> */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="login-btn">
              <Link   to="/login" 
                className="btn  align-items-center text-white head-link-login "
                type="submit"
              
                 >Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
