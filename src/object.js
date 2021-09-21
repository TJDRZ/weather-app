class WeatherObject {
  constructor(API) {
    this.city = API.name;
    this.weather = API.weather[0].main;
    this.description = API.weather[0].description;
    this.icon = API.weather[0].icon;
    this.temp = API.main.temp;
    this.tempMin = API.main.temp_min;
    this.tempMax = API.main.temp_max;
    this.humidity = API.main.humidity;
    this.windSpeed = API.wind.speed;
    this.windDeg = API.wind.deg;
  }
}

export { WeatherObject };
