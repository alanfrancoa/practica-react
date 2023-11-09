import { useState } from "react"

const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '9763f32b01a3749162e1a6f260e28264'
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCityChange = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try{ //https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9763f32b01a3749162e1a6f260e28264
            const response = await fetch(`${urlBase}?q=${ciudad}&APPID=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
            console.log(dataClima)

        }
        catch(error){
            console.error('Ocurrio el siguiente error: ', error)
        }
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
    </div>
  )
}

export default WeatherApp