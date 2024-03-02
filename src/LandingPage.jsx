import React from "react";
import { Link, useNavigate } from "react-router-dom";

import image1 from "./images/bg.png";
import image2 from "./images/s3.jpg";
import core from "./images/core.jpg";
import keyFeature from "./images/KeyFeatures.png";
import about from "./images/About.png";
import community from "./images/Community.png";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./LandingPage.css";

function LandingPage(props) {


  const { loggedIn, email } = props;
  const navigate = useNavigate();

  return (
    <>
      <Header value={loggedIn ? "Log out" : "Log in"} />

      <section className="banner_w3lspvt" id="home">
        <div className="csslider infinity" id="slider1">
          <div className="banner-top">
            <div className="overlay">
              <div className="container">
                <div className="w3layouts-banner-info text-center" style={{width:"100%", height:"75vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                  <h2 className="text-light">Welcome to SoilMate</h2>
                  <h3 className="text-light" style={{fontFamily:"Inter", letterSpacing:"1px"}}>Empowering Farmers with Data-Driven Agriculture</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //banner */}

      {/* Key Features */}
      <section className="container-fluid d-flex imgContainer">
        <img src={keyFeature} className="imgKeyFeatures" alt="KeyFeatures" />
      </section>

      <section className="container-fluid d-flex">
        <img src={about} className="imgKeyFeatures" alt="KeyFeatures" />
      </section>

      <section className="container-fluid d-flex" style={{backgroundColor:"#DBDBDB"}}>
        <img src={community} className="imgKeyFeatures" alt="community" />
      </section>

      {/* Products & Services */}
      {/* <section className="blog py-5">
        <div className="container py-md-5">
          <h3 className="heading mb-sm-5 mb-4 text-center">
            {" "}
            Aim Of The Project
          </h3>
          <div className="row blog-grids">
            <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
              <img src={image2} className="img-fluid" alt="" />
              <a href="{{ url_for('crop_recommend') }}">
                <div className="blog-info">
                  <h4>Crop</h4>

                  <p className="mt-2">
                    {" "}
                    Recommendation about the type of crops to be cultivated
                    which is best suited for the respective conditions
                  </p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
              <img src={image2} className="img-fluid" alt="" />
              <a href="{{ url_for('crop_recommend') }}">
                <div className="blog-info">
                  <h4>Crop</h4>

                  <p className="mt-2">
                    {" "}
                    Recommendation about the type of crops to be cultivated
                    which is best suited for the respective conditions
                  </p>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
              <img src={image2} className="img-fluid" alt="" />
              <a href="{{ url_for('crop_recommend') }}">
                <div className="blog-info">
                  <h4>Crop</h4>

                  <p className="mt-2">
                    {" "}
                    Recommendation about the type of crops to be cultivated
                    which is best suited for the respective conditions
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* //Products & Services */}

    

      <Footer />
    </>
  );
}

export default LandingPage;
