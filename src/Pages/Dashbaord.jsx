import React, { useEffect, useState } from "react";
// import Header from "../components/Header/Header";
import Progress from "../components/Progress/Progress";
import WeatherInfo from "../components/Weather/WeatherInfo";
import NPKForm from "../components/Form/NPKForm";
import CropCard from "../components/Card/CropCard";
import TestTaken from "../components/Form/TestTaken";
import Chat from "../components/chatbot/Chat";
import FertilizerCard from "../components/Card/FertilizerCard";

import "../css/Dashboard.css";

const data = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1613896955,
    localtime: "2021-02-21 8:42",
  },
  current: {
    last_updated_epoch: 1613896210,
    last_updated: "2021-02-21 08:30",
    temp_c: 11,
    temp_f: 51.8,
    is_day: 1,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 3.8,
    wind_kph: 6.1,
    wind_degree: 220,
    wind_dir: "SW",
    pressure_mb: 1009,
    pressure_in: 30.3,
    precip_mm: 0.1,
    precip_in: 0,
    humidity: 82,
    cloud: 75,
    feelslike_c: 9.5,
    feelslike_f: 49.2,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 10.5,
    gust_kph: 16.9,
    season: "Fall",
    air_quality: {
      co: 230.3,
      no2: 13.5,
      o3: 54.3,
      so2: 7.9,
      pm2_5: 8.6,
      pm10: 11.3,
      "us-epa-index": 1,
      "gb-defra-index": 1,
    },
  },
};

function Dashboard(props) {
  const { tested, setTested } = props;
  // console.log( "tested or not: ", props);
  // console.log( "This is in Dashboard", props);

  return (
    <>
      {/* <Header /> */}
      <div className="container">
        {/* <Header value={'signout'}/> */}
        <h1 style={{ marginTop: "14vh" }}>Home</h1>

        <h3>Weather Details</h3>
        {/* {data ? <pre>{data.current.temp_c}</pre> : 'Loading...'} */}
        <div className="row p-2 mb-4 d-flex ">
          <div className="col-lg-6 col-sm-12">
            <WeatherInfo />
            <Progress />
          </div>

          <div
            className="col-lg-6 col-sm-12 rounded-2 p-4"
            style={{ backgroundColor: "#043A3A" }}
          >
            {tested ? (
              <TestTaken tested={tested} setTested={setTested} />
            ) : (
              <NPKForm tested={tested} setTested={setTested} />
            )}
            {/* <NPKForm  tested={tested} setTested={setTested} /> */}
          </div>
        </div>

        <div
          className="container"
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
          }}
        >
          <h1>Recommended Crops</h1>
          <div className="row card-container">
            {/* {crops.map((crop) => {
              <CropCard crops={crop}/>
            })} */}

            <CropCard />
          </div>
        </div>

        <div
          className="container"
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
          }}
        >
          <h1>Recommended Crops</h1>
          <div className="row card-container">
            
            <FertilizerCard />
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
}

export default Dashboard;
