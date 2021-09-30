import { API } from "./API.js";

const DOM = (() => {
  document.querySelector(".submit").addEventListener("click", (e) => {
    if (document.querySelector("form").checkValidity()) {
      e.preventDefault();
      API(
        String(document.querySelector(".user-city").value),
        String(document.querySelector(".user-state").value),
        String(document.querySelector(".user-country").value)
      ).then((weather) => {
        document.querySelector(".container").style.display = "grid";
        updateDOM(weather);
      });
    }
  });

  function updateDOM(weather) {
    document.querySelector(".city").textContent = weather.city;

    document.querySelector(".weather").textContent = weather.description;

    imperialTemps(weather);

    document.querySelector(".humidity").textContent =
      "Humidity: " + weather.humidity + "%";

    document.querySelector(".speed").textContent =
      "Wind Speed: " + weather.windSpeed + "mph";

    document.querySelector(".deg").innerHTML =
      "Wind Direction: " +
      weather.windDeg +
      "&#176;" +
      windDegreeArrows(weather.windDeg);

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png";

    document.querySelector(".F").addEventListener("click", () => {
      imperialTemps(weather);
    });

    document.querySelector(".C").addEventListener("click", () => {
      metricTemps(weather);
    });
  }

  // Helper functions for updateDOM():
  function imperialTemps(weather) {
    document.querySelector(".min").innerHTML =
      "Low: " + weather.imperialTempMin + "&#176;";
    document.querySelector(".temp").innerHTML =
      "Now: " + weather.imperialTemp + "&#176;";
    document.querySelector(".max").innerHTML =
      "High: " + weather.imperialTempMax + "&#176;";
  }

  function metricTemps(weather) {
    document.querySelector(".min").innerHTML =
      "Low: " + weather.metricTempMin + "&#176;";
    document.querySelector(".temp").innerHTML =
      "Now: " + weather.metricTemp + "&#176;";
    document.querySelector(".max").innerHTML =
      "High: " + weather.metricTempMax + "&#176;";
  }

  function windDegreeArrows(windDeg) {
    switch (true) {
      case windDeg == 360 || windDeg == 0:
        return "&#8593;";
      case windDeg > 270 && windDeg < 360:
        return "&#8598;";
      case windDeg == 270:
        return "&#8592;";
      case windDeg > 180 && windDeg < 270:
        return "&#8601;";
      case windDeg == 180:
        return "&#8595;";
      case windDeg > 90 && windDeg < 180:
        return "&#8600;";
      case windDeg == 90:
        return "&#8594;";
      case windDeg > 0 && windDeg < 90:
        return "&#8599;";
    }
  }
})();
