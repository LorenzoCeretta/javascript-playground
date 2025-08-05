function showCardFooter() {
  const dataContainer = document.getElementById("card-footer");
  dataContainer.style.display = "flex";
  dataContainer.style.justifyContent = "center";
  dataContainer.style.gap = "5rem";
  dataContainer.style.margin = "1rem";
}

async function fetchData() {
  try {
    const city = document.getElementById("search-bar-input").value;
    const apiKey = "your_open_weather_api_key"; // Change this line to your real API Key

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Could not fetch data");
    }

    const data = await response.json();

    const cityName = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].main;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const cityElement = document.getElementById("city-text");
    cityElement.textContent = cityName;

    const temperatureElement = document.getElementById("temperature-text");
    temperatureElement.textContent = `${temperature} C`;

    const conditionElement = document.getElementById("condition-text");
    conditionElement.textContent = `${condition}`;

    const humidityElement = document.getElementById("humidity-text");
    humidityElement.textContent = `${humidity}%`;

    const windElement = document.getElementById("wind-text");
    windElement.textContent = `${windSpeed} m/s`;

    const weatherIconId = data.weather[0].icon;
    const weatherIconElement = document.getElementById("weather-icon");
    weatherIconElement.src = `https://openweathermap.org/img/wn/${weatherIconId}@2x.png`;

    showCardFooter();
  } catch (error) {
    console.error(error);
  }
}
