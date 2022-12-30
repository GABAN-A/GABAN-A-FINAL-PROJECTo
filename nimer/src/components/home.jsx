import React from "react";
import Sidebar2 from "./sidebar";
import Sociallinks from "../components/sociallinks";
const Homepage = () => {

  return (
    <>
      <div className="container background-home">
        <div className="row  InnerContainer">
          <div
            id="carouselExampleCaptions"
            className="carousel p-0 m-0 slide col-lg-10 col-sm-12 col-md-11  "  
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active ">
              <img className="w-100 style" src={require('../images/3.jpg')}></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>טעים טרי איכותי </h5>
  
                </div>
              </div>
              <div className="carousel-item">
              <img className="w-100 style" src={require('../images/steak.jpg')}></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>מפנקים מכול הלב</h5>
                </div>
              </div>
              <div className="carousel-item">
              <img className="w-100 style" src={require('../images/4.jpg')}></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>אוכל זה אומנות</h5>
               
                </div>
              </div>
              <div className="carousel-item">
              <img className="w-100 style" src={require('../images/12.jpg')}></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>אוכל זה אומנות</h5>
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
              ></span>
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
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> 
          <div className="container col-lg-2 col-md-1 col-sm-12">
          <Sidebar2/>
          </div>   
     
      </div>
   
        </div>
        <div className="mt-2">
        <Sociallinks/>
      </div>

    </>
  );
};
export default Homepage;
