import { loadWeatherByCity, getServiceState } from "../Project/service.js";
import { render } from "./ui.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("cityInput");

function initApp() {
form.addEventListener("submit", handleSearch);
render({ loading: false, error: null, data: null });
}

async function handleSearch(e) {
e.preventDefault();

const city = input.value.trim();
if (!city) return;

render({ loading: true });

const data = await loadWeatherByCity(city);
const { loading, error } = getServiceState();

render({
loading,
error,
data,
});
}

initApp();