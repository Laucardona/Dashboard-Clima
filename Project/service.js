const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

let state = {
loading: false,
error: null,
};

export function getServiceState() {
return state;
}

export async function loadWeatherByCity(city) {
state.loading = true;
state.error = null;

try {

const geoResponse = await fetch(`${GEO_URL}?name=${city}&count=1`);
const geoData = await geoResponse.json();

if (!geoData.results || geoData.results.length === 0) {
throw new Error("Ciudad no encontrada");
}

const { latitude, longitude, name } = geoData.results[0];

const weatherResponse = await fetch(
`${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);

const weatherData = await weatherResponse.json();

if (!weatherData.current_weather) {
throw new Error("No hay datos del clima disponibles");
}

return {
city: name,
weather: weatherData.current_weather,
};

} catch (error) {
state.error = error.message;
} finally {
state.loading = false;
}
}