import React, { useState } from 'react'
import './Meteorology.css'

const SearchForm = ({ onSearch }) => {
    const [city, setCity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(city.trim() !== ''){
            onSearch(city)
        }
    }

    return (
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
    )
}

export default SearchForm