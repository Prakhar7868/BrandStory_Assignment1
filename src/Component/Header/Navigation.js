import React from 'react'
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Navigation() {
  return (
    <>
    <div className='Head'>
    <div className='Navigationbar'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler menu-toggle" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
          <span></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link active navcolor" href="#Socaial_Network">LOGIN</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#Drug_database">PLATFORMS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#Drug_database">SOLUTIONS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#Medical_Calculator">PARTNERS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#articles">COMPANY</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#News">BLOGS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active navcolor" href="#Social_netwrok">CARRIERS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#Quizzes">SIGN IN</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navcolor" href="#Surveys">REQUEST A DEMO</a>
                  </li>
                 
          </ul>
          </div>
        </div>
      </nav>
      </div>


      </div>
    </>
  )
}
