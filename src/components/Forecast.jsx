import React, { useState } from 'react'
import SearchForm from './SearchForm'
import './Meteorology.css'

const Forecast = () => {
  const appid = process.env.REACT_APP_OPEN_WEATHER_KEY
  const [forecastData, setForecastData] = useState(null)

  const fetchForecast = async (city) => {
    try{
      const responseGeo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${appid}`)
      const dataGeo = await responseGeo.json()

      if(!dataGeo.length){
         alert('Cidade não encontrada')
         return
      }
      const {lat, lon} = dataGeo[0]

      const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=pt_br&appid=${appid}`)
      const weather = await responseWeather.json()
      
      setForecastData(weather)

    } catch (err) {
        console.error('Erro ao buscar dados:', err)
    }
  }

  if (!forecastData) {
    return (
      <div className='app-container'>
        <h1>Previsão do tempo</h1>
        <SearchForm onSearch={fetchForecast}/>
        <p>Sem dados disponíveis</p>
      </div>
    )
  }

  return (
    <div className='app-container'>
      <h1>Previsão do tempo</h1>
      <SearchForm onSearch={fetchForecast}/>     
      <table class='custom-table'>
        <tr>
          <th>Data</th>
          <th>Temperatura (°C)</th>
          <th>Umidade (%)</th>
        </tr> 
        {forecastData?.list?.map((item, i) => (
          <tr>
            <td>{item.dt_txt}</td>
            <td>{(Number(item.main.temp) - 273.15).toFixed(1)}</td>
            <td>{item.main.humidity}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Forecast