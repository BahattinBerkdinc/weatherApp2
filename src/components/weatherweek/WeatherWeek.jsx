
import React from 'react'
import "./style.scss"
import { Col, Container, Row } from 'react-bootstrap';

const WeatherWeek = ({data}) => {

    if (!data || !data.city || data.list.length === 0 || !data.list[0]?.weather[0]) {
        return null; // veya istediğiniz bir hata mesajı veya yer tutucu gösterilebilir
      }


  return (
    <Container>
        <Row className='week'>
        {
            data.list.slice(1,9).map((data,index)=>{
                return (
                    <Col md={6} lg={3} className="day-box mb-3" key={index}>
                    <small>{data.dt_txt.split(" ")[0]}</small>
                    <small>{data.dt_txt.split(" ")[1].slice(0,5)}</small>
                    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
                    <h1>{data.main.temp.toFixed(0)}<small>°</small></h1>
                    <span style={{fontStyle:'italic', fontWeight:"200"}}>-{data.weather[0].description}-</span>
                    
                    <div className='day-info'>
                        <div>
                            <span>Hissedilen</span>
                            <span>{data.main.feels_like.toFixed(0)}°</span>
                        </div>
                        
                    </div>
                    
                    </Col>
                )
            })
        }
    </Row>
    </Container>
  )
}

export default WeatherWeek




