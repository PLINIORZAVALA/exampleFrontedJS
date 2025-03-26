const url = 'https://open-weather13.p.rapidapi.com/city/london/EN';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9215f4943amsh2bfc48c60143ffbp1ea17bjsn5c59f8471274',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Usa .json() en lugar de .text()
    
    //Muestra todo los resultados de la API
    console.log(result);

  } catch (error) {
    console.error("Error completo:", error);
  }
}

fetchData();