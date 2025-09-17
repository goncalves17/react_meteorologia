import React, { useState } from 'react'
import './Meteorology.css'
import CurrentMeteoInfo from './CurrentMeteoInfo'

const Meteorology = ({meteorologyData, onSearch}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if(city.trim() !== ''){
      onSearch(city)
    }
  }

  return (
    <div className='app-container'>
        <h1>Clima atual</h1>
        <form className='form-container' onSubmit={handleSubmit}>
            <label>Digite a cidade: </label>
            <input 
              type='text' 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            <input 
              type='submit' 
              name='Enviar' 
              value='Enviar' 
              className='custom-button'
            />
        </form>
        <CurrentMeteoInfo meteorologyData={meteorologyData} />
    </div>
  )
}

export default Meteorology