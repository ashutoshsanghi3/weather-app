import React from 'react'
import Location from './Location'
import "./CurrentTime.js"
import DynamicClock from './DynamicClock'
import Weather from './Weather'
const Top = ({data}) => {
  return (
    <div className="top">
          <div className="location">
            <Location data={data}/>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>:null}
          </div>
          <div className="description">
            {data.weather?<Weather data={data}/>:null}
          </div>
          <div className='time'>
          {data.name!==undefined ? 
            <DynamicClock data={data}/>:null  
          }
          </div>
          
    </div>
  )
}

export default Top