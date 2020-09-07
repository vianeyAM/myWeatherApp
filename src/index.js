function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weatherType");
  let feelsElement = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#windspeed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = response.data.wind.speed;
}

let apiKey = "9d041a66b2677835578d08c7e50fc654";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
