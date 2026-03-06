export function render({ loading, error, data }) {

const result = document.getElementById("result");
result.innerHTML = "";

if (loading) {
result.innerHTML = `<p class="loading">Cargando clima...</p>`;
return;
}

if (error) {
result.innerHTML = `<p class="error">${error}</p>`;
return;
}

if (data) {
result.innerHTML = `
<div class="card">
<h2>${data.city}</h2>
<p> Temperatura: ${data.weather.temperature} °C</p>
<p> Viento: ${data.weather.windspeed} km/h</p>
<p>Código clima: ${data.weather.weathercode}</p>
<p>Hora: ${data.weather.time}</p>
</div>
`;
}

}