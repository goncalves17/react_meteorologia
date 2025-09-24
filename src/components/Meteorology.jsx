import React, { useState } from 'react'
import './Meteorology.css'
import CurrentMeteoInfo from './CurrentMeteoInfo'
import SearchForm from './SearchForm'

const Meteorology = () => {

  const appid = process.env.REACT_APP_OPEN_WEATHER_KEY
  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = async (city) => {
     try{
        const responseGeo = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${appid}`)
        const dataGeo = await responseGeo.json()

        if(!dataGeo.length){
           alert('Cidade não encontrada')
           return
        }
        const {lat, lon} = dataGeo[0]

        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${appid}`)
        const weather = await responseWeather.json()
        setWeatherData(weather)
     } catch (err) {
        console.error('Erro ao buscar dados:', err)
     }
  }

  return (
    <div className='app-container'>
        <h1>Clima atual</h1>
        <SearchForm onSearch={fetchWeather}/>
        <CurrentMeteoInfo meteorologyData={weatherData} />
    </div>
  )
}

export default Meteorology