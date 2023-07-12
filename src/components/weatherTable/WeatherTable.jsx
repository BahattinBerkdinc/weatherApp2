import React, {useState } from 'react'
import './style.scss' 
import WeatherForm from '../weatherForm/WeatherForm'
import WeatherInfo from '../weatherInfo/WeatherInfo'
import axios from 'axios'
import WeatherWeek from '../weatherweek/WeatherWeek'

const WeatherTable = () => {

  const [city,setCity] = useState("")
  const [data,setData] =useState("")

  const handleData = async () => {

    if(city.length===0) return

    

    try {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b77df33a0f3ac5b4b707dc648f48d8d4&units=metric&lang=tr`)

    console.log(resp.data);
    setData(resp.data)
    setCity("")
    } catch (error) {
      console.log(error.message);
    }

  }


  return (
    <div className='w-table'>
      <div className="glass">
        <div className="left-side" style={!city && !data ? {borderRight:0} : {borderRight:"1px solid rgba(255, 255, 255, 0.396)"}}>
        <WeatherForm city={city} setCity={setCity} handleData={handleData} />
        <WeatherInfo data={data}/>
        </div>
        <div className="right-side" style={!city && !data ? {display:"none", borderRight:0}: {display:"block"}}>
          <WeatherWeek data={data} />
        </div>
      </div>  
    </div>
  )
}

export default WeatherTable
