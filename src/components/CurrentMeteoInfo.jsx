import React from 'react'
import './Meteorology.css'

const CurrentMeteoInfo = ({meteorologyData}) => {
  if (!meteorologyData) return <p>Nenhum dado disponível.</p>;
  return (
    <div className='current-meteo-info'>
      <div className='meteorology-summary'>
        <p>Descrição: {meteorologyData.weather[0].description}</p>
      </div>
      <div className='meteorology-details'>
        <div className='meteorology-row'> 
          <p className='card-description'>Temperatura</p>
          <p className='card'>{(Number(meteorologyData.main.temp) - 273.15).toFixed(1)} °C</p>
        </div>
        <div className='meteorology-row'>
          <p className='card-description'>Sensação térmica</p>
          <p className='card'>{(Number(meteorologyData.main.feels_like) - 273.15).toFixed(1)} °C</p>
        </div>
        <div className='meteorology-row'>
          <p className='card-description'>Umidade relativa</p>
          <p className='card'>{meteorologyData.main.humidity} %</p>
        </div>
      </div>

    </div>
  )
}

export default CurrentMeteoInfo