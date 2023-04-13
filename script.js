// Retrieves the weather data from localStorage.
function getWeatherData() {
  const myArrayString = localStorage.getItem('myArray');
  // parses it as a json object
  return JSON.parse(myArrayString);
}

// Creates an h2 element with the specified city name and returns it
function createCityElement(city) {
  const cityElement = document.createElement('h2');
  cityElement.textContent = city;
  return cityElement;
}

// Creates a p element with the specified temperature in Celsius and returns it
function createTemperatureElement(temperature) {
  const temperatureElement = document.createElement('p');
  temperatureElement.textContent = `${temperature}°C`;
  return temperatureElement;
}

// Creates an img element with the specified URL for the weather icon and returns it
function createWeatherIconElement(iconUrl) {
  const weatherIconElement = document.createElement('img');
  weatherIconElement.setAttribute('src', iconUrl);
  return weatherIconElement;
}

// Creates an h5 element with the specified weather description and returns it
function createWeatherDescriptionElement(description) {
  const weatherDescriptionElement = document.createElement('h5');
  weatherDescriptionElement.textContent = description;
  return weatherDescriptionElement;
}

// Renders the weather data to the specified container element
function renderWeatherData(data, container) {
  // Iterate over each item in the weather data array
  data.forEach((item) => {
    // Extract the data (cityName, Temprature, Icon and Description)
    const city = item.name;
    const temperature = item.main.temp;
    const weatherIconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    const weatherDescription = item.weather[0].description;

    // for display in dom
    const cityElement = createCityElement(city);
    container.appendChild(cityElement);

    const temperatureElement = createTemperatureElement(temperature);
    container.appendChild(temperatureElement);

    const weatherIconElement = createWeatherIconElement(weatherIconUrl);
    container.appendChild(weatherIconElement);

    const weatherDescriptionElement =
      createWeatherDescriptionElement(weatherDescription);
    container.appendChild(weatherDescriptionElement);
  });
}

// Get a reference to the container element where the weather data will be displayed
const localContainer = document.getElementById('local-container');

// Retrieve the weather data and render it to the container element
const myArray = getWeatherData();
renderWeatherData(myArray, localContainer);
