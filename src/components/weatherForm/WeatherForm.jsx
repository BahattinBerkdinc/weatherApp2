import React from 'react';
import './style.scss'

const WeatherForm = ({city,setCity,handleData}) => {



const handleCityName = (e) => {
   const val = e.target.value;
   setCity(val)
}

const showCityInfo = (e) => {
    e.preventDefault()
  handleData()
}

    

  return (
    <form>
      <input type="text"
      placeholder='Type a City'
    value={city || '' }
    onChange={handleCityName}
      />
      <button type='submit' onClick={showCityInfo} >Goster</button>
    </form>
  )
}

export default WeatherForm
