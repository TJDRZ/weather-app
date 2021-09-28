import { WeatherObject } from "./object.js";

async function API(city, state, country) {
  try {
    const weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=9bb3cc7ae04b7802823a85cd1a09b3f1`
    );

    const data = await weatherAPI.json();

    const weather = await _objectCreation(data);

    return weather;
  } 
  catch (err) {
    console.log(err);
    alert("Looks like there was an error fetching the city");
  }
}

function _objectCreation(data) {
  const weather = new WeatherObject(data);

  weather.imperialTemp = _kToF(data.main.temp);
  weather.imperialTempMin = _kToF(data.main.temp_min);
  weather.imperialTempMax = _kToF(data.main.temp_max);
  weather.metricTemp = _kToC(data.main.temp);
  weather.metricTempMin = _kToC(data.main.temp_min);
  weather.metricTempMax = _kToC(data.main.temp_max);

  return weather;
}

// Kelvin to Fahrenheit
function _kToF(k) {
  return Math.round(((k - 273.15) * 9) / 5 + 32);
}

// Kelvin to Celsius
function _kToC(k) {
  return Math.round(k - 273.15);
}

export { API };
