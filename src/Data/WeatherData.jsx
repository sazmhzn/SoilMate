function WeatherData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=101b4003fe7e4b1f8a313841242902&q=Lalitpur&aqi=no")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return <>
    
  </>;
}

export default WeatherData;
