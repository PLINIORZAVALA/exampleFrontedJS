// URL y opciones para la API
const url = 'https://open-weather13.p.rapidapi.com/city/london/EN';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9215f4943amsh2bfc48c60143ffbp1ea17bjsn5c59f8471274',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

async function getWeather() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Conversión a Celsius (si la API da Fahrenheit)
    const tempCelsius = (result.main.temp - 32) * 5/9;

    // Mostrar datos en el HTML
    document.getElementById('city').textContent = result.name;
    document.getElementById('temp').textContent = tempCelsius.toFixed(1);
    document.getElementById('description').textContent = result.weather[0].description;
    document.getElementById('humidity').textContent = result.main.humidity;
    document.getElementById('wind').textContent = result.wind.speed;

    // Icono del clima (usando OpenWeatherMap icons)
    const iconCode = result.weather[0].icon;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    console.error("Error:", error);
    document.getElementById('city').textContent = "Error al cargar datos";
  }
}

// Ejecutar al cargar la página
getWeather();