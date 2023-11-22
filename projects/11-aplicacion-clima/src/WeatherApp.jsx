import { useState } from "react"
import fetchClima from "./services/weather"
const WeatherApp = () => {

    const difKelvin = 273.15
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCityChange = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima(ciudad, setDataClima)
    }

  return (
    <div className="container">
        <h1>Aplicacion del Clima</h1>

        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={ciudad}
                onChange={handleCityChange}
                />
            <button type='submit'>Buscar</button>
        </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)} °C</p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt={dataClima.weather[0].description}/>
                        <p>Condición meteorologica: {dataClima.weather[0].description}</p>
                    </div>
                )}
    </div>
  )
}

export default WeatherApp