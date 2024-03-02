import React, { useEffect, useState } from "react";
// import Header from "../components/Header/Header";
import Progress from "../components/Progress/Progress";
import WeatherInfo from "../components/Weather/WeatherInfo";
import NPKForm from "../components/Form/NPKForm";
import CropCard from "../components/Card/CropCard";
import TestTaken from "../components/Form/TestTaken";
import Chat from "../components/chatbot/Chat";
import FertilizerCard from "../components/Card/FertilizerCard";



import coffeeImage from "../images/crop/coffee.png";
import cottonImage from "../images/crop/cotton.png";
import grapesImage from "../images/crop/grape.png";
import juteImage from "../images/crop/jute.jpg";



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

const CropData = [
  {
    id: "1",
    name: "Coffee Crop",
    img: coffeeImage,
    description:
      "The traditional method of planting coffee is to place 20 seeds in each hole at the beginning of the rainy season. This method loses about 50% of the seeds' potential, as about half fail to sprout. A more effective process of growing coffee, used in Brazil, is to raise seedlings in nurseries that are then planted outside at six to twelve months. Coffee is often intercropped with food crops, such as corn, beans, or rice during the first few years of cultivation as farmers become familiar with its requirements. Coffee plants grow within a defined area between the tropics of Cancer and Capricorn, termed the bean belt or coffee belt.",
  },
  {
    id: "2",
    name: "Cotton Crop",
    img: cottonImage,
    description:
      "Successful cultivation of cotton requires a long frost-free period, plenty of sunshine, and a moderate rainfall, usually from 60 to 120 cm (24 to 47 in)[citation needed]. Soils usually need to be fairly heavy, although the level of nutrients does not need to be exceptional. In general, these conditions are met within the seasonally dry tropics and subtropics in the Northern and Southern hemispheres, but a large proportion of the cotton grown today is cultivated in areas with less rainfall that obtain the water from irrigation. Production of the crop for a given year usually starts soon after harvesting the preceding autumn.",
  },
  {
    id: "3",
    name: "Grapes Crop",
    img: grapesImage,
    description:
      "Harvesting period for grapes, generally starts 30-70 days after fruit set, by the time berries change color from green to yellow (for white varieties), or red-purple (for red varieties). During this stage, we normally have an increase in sugars and a decrease in acids inside the fruits. In general, in the northern hemisphere, most varieties mature from August since November, while in the southern hemisphere from March to August.",
  },
  {
    id: "4",
    name: "Jute Crop",
    img: juteImage,
    description:
      "To grow jute, farmers scatter the seeds on cultivated soil. When the plants are about 15–20 cm tall, they are thinned out. About four months after planting, harvesting begins. The plants are usually harvested after they flower, before the flowers go to seed. The stalks are cut off close to the ground. The stalks are tied into bundles and soaked in water for about 20 days. This process softens the tissues and breaks the hard [pectin] bond between the bast and [Jute hurd] (inner woody fiber stick) and the process permits the fibres to be separated. The fibres are then stripped from the stalks in long strands and washed in clear, running water.",
  },
];

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

            <CropCard value={CropData}/>
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
