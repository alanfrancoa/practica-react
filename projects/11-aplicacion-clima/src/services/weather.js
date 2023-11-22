const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9763f32b01a3749162e1a6f260e28264';

const fetchClima = async (ciudad, setDataClima) => {
    try {
        const response = await fetch(`${urlBase}?q=${ciudad}&APPID=${API_KEY}`);
        const data = await response.json();
        setDataClima(data);
        console.log(data);
    } catch (error) {
        console.error('Ocurrió el siguiente error: ', error);
    }
}

export default fetchClima;