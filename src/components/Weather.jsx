import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const apiKey = process.env.REACT_APP_API_KEY;
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
        setBackgroundWeatherImage(response.data.weather[0].id);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  const setBackgroundWeatherImage = (weatherCode) => {
    const weatherImages = {
      200: 'https://www.usatoday.com/gcdn/-mm-/5c8bf163d61d56de560dacb3f845b9116f1adc6e/c=118-0-2003-1414/local/-/media/2022/04/22/USATODAY/usatsports/MotleyFool-TMOT-75be337f-f8a12da4.jpg', // Thunderstorm
      201: 'https://media.istockphoto.com/id/1367804543/photo/cloudy-sky-flashes-and-rain-cloudy-sky-flashes-and-rain.webp?b=1&s=170667a&w=0&k=20&c=jZ1mGKdZLIGlQ4l_N-fB1NNqVBb8Dm1LkpLtyf6-6zg=', // Thunderstorm with rain
      202: 'https://cdn.forumcomm.com/dims4/default/bf35095/2147483647/strip/true/crop/2700x1800+250+0/resize/840x560!/quality/90/?url=https%3A%2F%2Ffcc-cue-exports-brightspot.s3.us-west-2.amazonaws.com%2Fduluthnewstribune%2Fbinary%2F1e2VlF1jNaefjbtB0OTLsTR0hu7bm73JL_binary_1715620.jpg', // Thunderstorm with heavy rain
      210: 'https://media.bom.gov.au/social/upload/images/lightning-at-adelaide-airport-rowland-beardsell-2015-calendar-resize.jpg', // Light thunderstorm
      211: 'https://www.reconnectwithnature.org/getmedia/a2de823c-a1ae-491e-a47b-f373af403d4e/Thunderstorm-lightning-strike-shutterstock_1.jpg?width=1500&height=1000&ext=.jpg', // Thunderstorm
      212: 'https://static.independent.co.uk/2023/12/28/12/iStock-1475073155.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp', // Heavy thunderstorm
      221: 'https://s.w-x.co/shelf-columbusOH-lightning_980x551.jpg', // Ragged thunderstorm
      230: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cloud_to_ground_lightning_strikes_south-west_of_Wagga_Wagga.jpg', // Thunderstorm with light drizzle
      231: 'https://assets.telegraphindia.com/telegraph/24metsc2_211827.jpg', // Thunderstorm with drizzle
      232: 'https://www.newsbharati.com/Encyc/2019/4/18/2_06_23_45_1107_1_H@@IGHT_800_W@@IDTH_1200.jpg', // Thunderstorm with heavy drizzle
      500: 'https://cdn.zeebiz.com/sites/default/files/2023/09/21/261707-weather-effects-composition-1.jpg?im=FitAndFill=(1200,900)', // Light rain
      501: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-222700,resizemode-75,msid-106065511/news/india/chennai-weather-update-heavy-rains-predicted-in-tamil-nadu-imd-issues-warning.jpg', // Moderate rain
      502: 'https://c.ndtvimg.com/2021-09/sbke40g_gujarat-rain-pti_625x300_14_September_21.jpg', // Heavy intensity rain
      503: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/ezgif-sixteen_nine_27.jpg?size=948:533', // Very heavy rain
      600: 'https://s.w-x.co/util/image/w/1209LightSnowDangers.png?v=at&w=1280&h=720', // Light snow
      601: 'https://static.euronews.com/articles/stories/07/24/15/80/1440x810_cmsv2_3fd96671-10b8-554b-ab90-a839ec7577f9-7241580.jpg', // Snow
      602: 'https://live-production.wcms.abc-cdn.net.au/7ad07842c157f657c85c14006f74ee0b?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485', // Heavy snow
      611: 'https://v.w-x.co/1705412424570_THIS_IS_WHAT_SLEET_SOUNDS_LIKE_1_92789eed-c9c0-45ff-9e36-b8f825628745.jpg', // Sleet
      711: 'https://static.albertafarmexpress.ca/wp-content/uploads/2023/05/09103206/2023-05-16T222908Z_176849535_RC2UZ0A6VYZB_RTRMADP_3_CANADA-WEATHER-WILDFIRES-1.jpeg', // Smoke
      751: 'https://media.sot.com.al/sot.com.al/media3/-800-0-626fa8fb1a0d3.jpg', // Sand
      761: 'https://i0.wp.com/www.ecomena.org/wp-content/uploads/2015/04/Sandstorm_MiddleEast.jpg?ssl=1', // Dust
      762: 'https://i0.wp.com/eos.org/wp-content/uploads/2023/01/ash-cloud-over-sinabung.jpg?fit=1200%2C675&ssl=1', // Volcanic ash
      771: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8XZoXpa6dJpzw7g7a8tnOIAJ42Id6Hc9dfsqOG7z5bxryUuFoi97-K24C-Uzx_IUlGc&usqp=CAU', // Squalls
      781: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1200px-F5_tornado_Elie_Manitoba_2007.jpg', // Tornado
      800: 'https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_640.jpg', // Clear sky
      801: 'https://qph.cf2.quoracdn.net/main-qimg-0a5c39ad8e91540277cefe6f984390e2-lq', // Few clouds
      802: 'https://images.snapwi.re/bf25/58db6731962c2e19068b4567.w800.jpg', // Scattered clouds
      803: 'https://miro.medium.com/v2/resize:fit:602/1*ulQgXN0jhTdP9lUJHnynuQ.jpeg', // Broken clouds
      804: 'https://media.istockphoto.com/id/531312214/photo/storm-over-the-fields.jpg?s=612x612&w=0&k=20&c=J8n9sUH-GKBdTzaDcYq-Lh0H43loSFnT3BfKfPZlKLc=', // Overcast clouds  
    };

    setBackgroundImage(weatherImages[weatherCode] || '');
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="weather-container">
      <div className="weather-details">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="weather-input"
        />
        <h2 className="weather-title">Weather in {weatherData.name}</h2>
        <p className="weather-temperature">Temperature: {weatherData.main.temp}°C</p>
        <p className="weather-description">Description: {weatherData.weather[0].description}</p>
      </div>
      <div className="weather-image">
        {backgroundImage && <img src={backgroundImage} alt="Weather condition" />}
      </div>
    </div>
  );
};

export default Weather;
