import React from 'react'

const Weather = ({data}) => {
    const wea=data.weather[0].main;
    const words=wea.split(" ")
    const capitalizedWeather =words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  return (
    <p style={{fontSize: "1.5rem"}}>{capitalizedWeather}</p>
  )
}

export default Weather