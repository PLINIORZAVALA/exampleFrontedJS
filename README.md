# Weather App Frontend

Aplicación web que muestra el clima actual usando la API de OpenWeather13 (RapidAPI).

[Capturatemperatura](https://github.com/user-attachments/assets/edb192b0-25eb-4d2f-b489-6311be396c3e)


## 🚀 Características

- Muestra temperatura (°C y °F), humedad, viento y condiciones climáticas
- Diseño responsive (mobile/desktop)
- Iconos climáticos dinámicos
- Actualización en tiempo real

## 📦 Requisitos

- Navegador web moderno (Chrome, Firefox, Edge)
- Cuenta en [RapidAPI](https://rapidapi.com/hub) (plan gratuito)
- Python 3.x (para servidor local)

## ⚙️ Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
```

2. Configura tu API key en `script.js`:
```javascript
headers: {
  'x-rapidapi-key': 'tu-api-key-aquí', // Reemplaza esto
  'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
}
```

## 🖥️ Ejecución con Python

1. Abre una terminal en la carpeta del proyecto:
```bash
cd ruta/a/weather-app
```

2. Inicia el servidor local:
```bash
python3 -m http.server 8000
```

3. Abre en tu navegador:
```
http://localhost:8000
```

## 🛠️ Alternativas de servidor local

### Opción 1: Live Server (VSCode)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` > "Open with Live Server"

### Opción 2: http-server (Node.js)
```bash
npx http-server
```
Luego visita `http://localhost:8080`

## 🗂️ Estructura del proyecto
```
weather-app/
├── index.html         # Interfaz principal
├── style.css          # Estilos CSS
├── script.js          # Lógica de la aplicación
└── README.md          # Este archivo
```

## 🔍 Solución de problemas

### Error 403 (Forbidden)
- Verifica tu suscripción en RapidAPI
- Confirma que la API key sea correcta

### Datos no aparecen
1. Revisa la consola del navegador (F12 > Console)
2. Verifica que los IDs en HTML coincidan con `script.js`

### Problemas de CORS
- Nunca abras el archivo HTML directamente (`file://`)
- Usa siempre un servidor local

## 🌟 Mejoras futuras
- [ ] Selector de ciudades
- [ ] Pronóstico extendido (5 días)
- [ ] Geolocalización automática

## 📄 Licencia
MIT License
