import React from "react";
import Header from './components/header/Header'
import WeatherBoard from './components/Weather/WeatherBoard'
import { WeatherContext } from "./context";
import {useState ,useEffect} from "react";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

const page = () => {
    const { weatherData,loading}=React.useContext(WeatherContext);
    const [climateImage ,setClimateImage] =useState(ClearSkyImage);

    function getBackgroundImage(climate){
        switch(climate){
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunderstorm":
                return ThunderStormImage;
            case "Drizzle":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return WinterImage;
        }
    }
    useEffect (()=>{
        const bgImage= getBackgroundImage(weatherData?.climate);
        setClimateImage(bgImage);
    },[weatherData.climate])

  return (
    <>
    {loading .state ?(
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-autog-gray-200 rounded ">
            <p>{loading.message}</p>
        </div>
    ):(
    
    <div className="place-items-center grid h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url(${climateImage})`}}>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
    )}
    </>
  );
};

export default page;
