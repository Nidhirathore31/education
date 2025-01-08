import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container-fluid p-0 mb-5">
  <div className="header-carousel position-relative">
    <div className="owl-carousel-item position-relative">
      <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: "rgba(24, 29, 56, .7)" }}
      >
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-sm-10 col-lg-8">
              <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                Best Online Courses
              </h5>
              <h1 className="display-3 text-white animated slideInDown">
                The Best Online Learning Platform
              </h1>
              <p className="fs-5 text-white mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                sanctus eirmod elitr.
              </p>
              <a
                href=""
                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                Read More
              </a>
              <a
                href=""
                className="btn btn-light py-md-3 px-md-5 animated slideInRight"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
            <h5 className="mb-3">Skilled Instructors</h5>
            <p>
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-globe text-primary mb-4" />
            <h5 className="mb-3">Online Classes</h5>
            <p>
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-home text-primary mb-4" />
            <h5 className="mb-3">Home Projects</h5>
            <p>
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item text-center pt-3">
          <div className="p-4">
            <i className="fa fa-3x fa-book-open text-primary mb-4" />
            <h5 className="mb-3">Book Library</h5>
            <p>
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default Home