import React, { useState, useEffect } from "react";
import WeatherData from "../WeatherData";
import weather from "../img/weather.png";

function getSeason(time) {
  const month = new Date(localTime).getMonth() + 1;
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Unknown";
  }
}

function WeatherInfo(props) {
  const [data, setData] = useState(); // State for the data returned by

  // console.log(new Date(data.location.localTime).getMonth() + 1);

  //   useEffect(() => {
  //     fetch(
  //       "http://api.weatherapi.com/v1/current.json?key=101b4003fe7e4b1f8a313841242902&q=Lalitpur&aqi=no"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error(error));
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=101b4003fe7e4b1f8a313841242902&q=Lalitpur&aqi=no`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  },[0]);

//   console.log(hello);

  return (
    <div className="card w-100" style={{ width: "100%" }}>
      <img className="card-img-top" src={weather} alt="Card image cap" />
      {/* {data ? <pre>{JSON.stringify(data, null,2)}</pre> : 'Loading...'} */}
      <div
        className="card-body text-white rounded-bottom  d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#043A3A" }}
      >
        <div className="row w-100">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white mb-1">
              {data ? data.current.temp_c : "no data available"} C
            </h1>
            <p className="text-light mb-0">Temperature</p>
          </div>
          {/* <div className="col  d-flex flex-column align-items-center">
            <h1 className="text-light"></h1>
            <p className="text-light">Season</p>
          </div> */}
          <div className="col d-flex flex-column align-items-center">
            <h1 className="text-light mb-1">
              {" "}
              {data ? data.current.precip_mm : "No data"} mm
            </h1>
            <p className="text-light mb-0">Rainfall</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
