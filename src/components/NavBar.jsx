import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
  <a
    href="index.html"
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
  >
    <h2 className="m-0 text-primary">
      <i className="fa fa-book me-3" />
      eLEARNING
    </h2>
  </a>
  <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <Link to='/' className="nav-item nav-link">
        Home
      </Link>
      <Link to='/about' className="nav-item nav-link">
        About
      </Link>
      <Link to='/courses' className="nav-item nav-link">
        Courses
      </Link>
      
      <Link to='/contact' className="nav-item nav-link">
        Contact
      </Link>
    </div>
    <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
      Join Now
      <i className="fa fa-arrow-right ms-3" />
    </a>
  </div>
</nav>

    </>
  )
}

export default NavBar