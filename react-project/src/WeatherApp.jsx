import SearchBox from "./SearchBox";
import InfoBOx from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
             city: "Delhi",
             feelsLike :24.84,
             temp: 25.05,
             tempMin :25.10,
             tempMax:25.05,
               humidity:47,
             weather: "haze",
    })
    let updateInfo =(newInfo)=>{
      setWeatherInfo(newInfo);
    }

    return (
        <div style ={{textAlign:"center"}}>  
            <h2>
                Weather App By Delta
            </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBOx info ={weatherInfo}/>
        </div>
    )
}