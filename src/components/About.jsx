import React from 'react'

const About = () => {
  return (
   <>
   <div className="container-fluid bg-primary py-5 mb-5 page-header">
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-10 text-center">
        <h1 className="display-3 text-white animated slideInDown">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</div>
{/* ABOUT */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div
        className="col-lg-6 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ minHeight: 400 }}
      >
        <div className="position-relative h-100">
          <img
            className="img-fluid position-absolute w-100 h-100"
            src="img/about.jpg"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <h6 className="section-title bg-white text-start text-primary pe-3">
          About Us
        </h6>
        <h1 className="mb-4">Welcome to eLEARNING</h1>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </p>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="row gy-2 gx-4 mb-4">
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Skilled Instructors
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Online Classes
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              International Certificate
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Skilled Instructors
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              Online Classes
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0">
              <i className="fa fa-arrow-right text-primary me-2" />
              International Certificate
            </p>
          </div>
        </div>
        <a className="btn btn-primary py-3 px-5 mt-2" href="">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default About