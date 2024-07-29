import React from "react";

function NewsSlider() {
  return (
    <div
      style={{ background: "#F4F2F6" }}
      className="vh-100 align-items-center d-flex"
    >
      <div className="container">
        <h1 className="subHeading text-center">
          Stay Updated With Migrants News
        </h1>
        <div className="row mx-lg-3 my-5 py-3">
          <div className="col-md-8 d-none d-md-block">
            <div
              id="carouselExampleCaptions"
              className="carousel slide  vh50"
              data-bs-ride="carousel "
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner vh50 bg-dark">
                <div className="carousel-item active">
                  <img
                    src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-3.jpg"
                    className="d-block w-100 vh50"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-3.jpg"
                    className="d-block w-100 vh50"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-3.jpg"
                    className="d-block w-100 vh50"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-primary" style={{width:"200px"}}>View All</button>
            </div>
          </div>
          <div className="col-md-4 custom-scrollbar">
      {[1, 2,3,4, 5].map((v, i) => (
        <div key={i}>
          <img
            src="https://bootstrapmade.com/demo/templates/ZenBlog/assets/img/post-landscape-2.jpg"
            className="img-fluid"
            alt="Post"
          />
          <p className="text-secondary mb-1"><b>BUSINESS • JUL 5TH '22</b></p>
          <h5 className="mb-3">6 Easy Steps To Create Your Own Cute Merch For Instagram</h5>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;
