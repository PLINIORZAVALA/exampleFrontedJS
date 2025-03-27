const axios = require('axios');

const url = 'https://open-weather13.p.rapidapi.com/city/london/EN';
const options = {
  headers: {
    'x-rapidapi-key': '9215f4943amsh2bfc48c60143ffbp1ea17bjsn5c59f8471274',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

async function getWeather() {
  try {
    const response = await axios.get(url, options);
    const result = response.data;

    // Conversión a Celsius (si la API da Fahrenheit)
    const tempCelsius = (result.main.temp - 32) * 5/9;

    // Mostrar datos clave
    console.log(`
      Ciudad: ${result.name}
      Clima: ${result.weather[0].description}
      Temperatura: ${result.main.temp}°F (${tempCelsius.toFixed(1)}°C)
      Humedad: ${result.main.humidity}%
      Viento: ${result.wind.speed} m/s
    `);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

getWeather();