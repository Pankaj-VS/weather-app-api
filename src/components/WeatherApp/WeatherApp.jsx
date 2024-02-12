import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import night_icon from '../Assets/night.png'
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import { getWeatherData } from '../../api/getWeather';

const WeatherApp = (props) => {


    const[wicon,setWicon] = useState(cloud_icon);
    const [data,setData] = useState([]) 

    const search =  () => {
        getWeatherData().then((data) => setData(data));
        console.log(data)
        if(data.weather[0].icon.search("01") != -1){
            if(data.weather[0].icon.search("d") != -1){
                setWicon(clear_icon);
            }
            else setWicon(night_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }

  return (
    <div className = 'container'>
        <div className = 'top-bar'>
            <input type = 'text' className = 'cityInput' placeholder = 'Enter the name of the city'/>
            <div className = 'search-icon' onClick = {()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src ={wicon} alt= ""/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src ={humidity_icon} alt = "" classname = "icon"/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src = {wind_icon} alt = "" classname = "icon"/>
                <div className="data">
                    <div className="wind-rate">18 Km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
            <button onClick={() => props.switchPage()}>Forecast </button>
    </div>
  )
}

export default WeatherApp