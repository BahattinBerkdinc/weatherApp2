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
  window.document.title = `${city.toUpperCase()} Hava Durumu` 
}

    

  return (
    <form>
      <input type="text"
      placeholder='Sehir Giriniz'
    value={city || '' }
    onChange={handleCityName}
      />
      <button type='submit' onClick={showCityInfo} >Göster</button>
    </form>
  )
}

export default WeatherForm
