import React from "react";
import { Link, useNavigate } from "react-router-dom";

import image1 from "./images/bg.png";
import image2 from "./images/s3.jpg";
import core from "./images/core.jpg";
import keyFeature from "./images/KeyFeatures.png";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./LandingPage.css"

function LandingPage(props) {

  const myStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
  };



  const { loggedIn, email } = props
  const navigate = useNavigate()


  return (

      <>
      <Header value={loggedIn ? 'Log out' : 'Log in'} />
 
        <section className="banner_w3lspvt" style={myStyle}  id="home">
          <div className="csslider infinity" id="slider1">
            <div className="banner-top">
              <div className="overlay">
                <div className="container">
                  <div className="w3layouts-banner-info text-center">
                    <h3 className="text-dark">Crop Recommendation System</h3>
                    <h4 className="text-success mx-auto my-4">
                      <strong> Here are some questions we'll answer</strong>
                    </h4>
                    <p className="text-light mx-auto mt-2">
                      1. What crop to plant here? <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //banner */}

        {/* Key Features */}
        <section className="container bg-success d-flex">
        {/* <h3 className="heading mb-sm-5 mb-4 text-center">
              {" "}
              Aim Of The Project
            </h3> */}
            <img src={keyFeature} alt="KeyFeatures" />
        </section>

        {/* Products & Services */}
        <section className="blog py-5">
          <div className="container py-md-5">
            <h3 className="heading mb-sm-5 mb-4 text-center">
              {" "}
              Aim Of The Project
            </h3>
            <div className="row blog-grids">

              <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
                <img
                  src={image2}
                  className="img-fluid"
                  alt=""
                />
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
                <img
                  src={image2}
                  className="img-fluid"
                  alt=""
                />
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
                <img
                  src={image2}
                  className="img-fluid"
                  alt=""
                />
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
        </section>
        {/* //Products & Services */}

        {/* core values */}
        <section className="core-value py-5">
          <div className="container py-md-4">
            <h3 className="heading mb-sm-5 mb-4 text-center"> About Us</h3>
            <div className="row core-grids">
              <div className="col-lg-6 core-left">
                <img
                  src={core}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 core-right">
                <h3 className="mt-4">
                  Improving Agriculture, Improving Lives, Cultivating Crops To
                  Make Farmers Increase Profit.
                </h3>
                <p className="mt-3">
                  We use state-of-the-art machine learning and deep learning
                  technologies to help you guide through the entire farming
                  process. Make informed decisions to understand the
                  demographics of your area, understand the factors that affect
                  your crop and keep them healthy for a super awesome successful
                  yield.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>

  );
}

export default LandingPage