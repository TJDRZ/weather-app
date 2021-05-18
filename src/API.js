import { WeatherObject } from './object.js';

async function API(city, state, country) {
    try {
        const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=9bb3cc7ae04b7802823a85cd1a09b3f1`, {mode: 'cors'});

        const data = await weatherAPI.json();
        
        const weather = objectCreation(data);
        
        return weather;
    }
    catch(err) {
        console.log(err);
        alert('Please enter a proper city name');
    }
}

function objectCreation(data) {
    weather = new WeatherObject(data);

    weather.imperialTemp = kToF(data.main.temp);
    weather.imperialTempMin = kToF(data.main.temp_min);
    weather.imperialTempMax = kToF(data.main.temp_max);
    weather.metricTemp = kToC(data.main.temp);
    weather.metricTempMin = kToC(data.main.temp_min);
    weather.metricTempMax = kToC(data.main.temp_max);
}

// Kelvin to Fahrenheit
function kToF(k) {
    return Math.round((k - 273.15) * 9/5 + 32);
}

// Kelvin to Celsius
function kToC(k) {
    return Math.round(k - 273.15);
}

export { 
    API,
};