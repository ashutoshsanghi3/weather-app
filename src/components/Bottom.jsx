import React from 'react'
import { FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi"
const Bottom = ({data}) => {
  return (
    <div className="bottom">
        <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
            <p><BiHappy style={{fontSize:"1.4rem",paddingTop:"2px"}} /> Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
        </div>
        <div className="wind">
            {data.wind?<p className="bold">{data.wind.speed.toFixed()}MPH</p>:null}
            <p><FaWind style={{fontSize:"1.2rem"}}/> Wind Speed</p>
        </div>
    </div>
  )
}

export default Bottom