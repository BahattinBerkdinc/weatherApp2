import React from 'react'
import './style.scss'
const WeatherInfo = ({data}) => {
console.log(data);


if (!data || !data.weather || data.weather.length === 0) {
    return ;
}

  return (
    <div className='w-info'>
        <h5>{data.name}</h5>
        <h1>{data.main.temp.toFixed()} <small>°C </small></h1>
        <span>{data.weather[0].description}</span>
        
        <div className='temp-info'>
            <div>
                <span>Max-Sicaklik</span>
                <span>{data.main.temp_max}</span>
            </div>
            <div>
                <span>Hissedilen Sicaklik</span>
                <span>{data.main.feels_like}</span>
            </div>
            <div>
                <span>Min-Sicaklik</span>
                <span>{data.main.temp_min}</span>
            </div>
        </div>
    </div>
  );
}

export default WeatherInfo
