
import React from 'react'
import "./style.scss"
import { Col, Container, Row } from 'react-bootstrap';

const WeatherWeek = ({data}) => {

    

    if (!data || !data.city || data.list.length === 0 || !data.list[0]?.weather[0]) {
        return null;
      }


  return (
    <Container className='d-flex flex-column align-items-center gap-5'>
        
        <Row className='week'>
        
        {
           
            data.list.slice(1,9).map((data,index)=>{
                return (
                    <Col  md={6} lg={4} className="day-box mb-3" key={index}>
                    <small>{data.dt_txt.split(" ")[0]}</small>
                    <small>{data.dt_txt.split(" ")[1].slice(0,5)}</small>
                    <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
                    <h1>{data.main.temp.toFixed(0)}<small>°</small></h1>
                    <span style={{color:"#fff",fontWeight:"200"}}>{data.weather[0].description}</span>
                    
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




