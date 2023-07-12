import React from 'react'
import './style.scss'
const WeatherInfo = ({data}) => {

    
    if (!data || !data.city || data.list.length  === 0 || !data.list[0].weather[0]) {
        return ;
    }

  return (
    <div className='w-info'>
        <h5>{data.city.name}</h5>
        <h6 style={{fontWeight:"200"}}>{data.list[0].dt_txt.split(" ")[0]}</h6>
        <h1>{data.list[0].main.temp.toFixed(0)}<small>°</small></h1>
        <span style={{fontStyle:'italic', fontWeight:"200"}}>-Gökyüzü  {data.list[0].weather[0].description}-</span>
        
        <div className='temp-info'>
            <div>
                <span>Max</span>
                <span>{data.list[0].main.temp_max.toFixed(0)}°</span>
            </div>
            <div>
                <span>Hissedilen</span>
                <span>{data.list[0].main.feels_like.toFixed(0)}°</span>
            </div>
            <div>
                <span>Min</span>
                <span>{data.list[0].main.temp_min.toFixed(0)}°</span>
            </div>
        </div>
    </div>
  );
}

export default WeatherInfo
