const displayClock = () => {
  const display = new Date().toLocaleTimeString();
  document.querySelector(".clock").innerHTML = `Local time: ${display}`;
  setTimeout(displayClock, 1000);
};

window.onload = displayClock();

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=74a3c5236462135661663f32160861f0&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const cityName = data.name;
    const temperature = data.main.temp.toFixed(1);
    const feel = data.main.feels_like.toFixed(1);
    const description = data.weather[0].description;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;

    const description_2 =
      description.charAt(0).toUpperCase() + description.slice(1);

    document.querySelector(".name").innerHTML = cityName;
    document.querySelector(".temp").innerHTML = `Temperature: ${temperature}°C`;
    document.querySelector(".feel").innerHTML = `Real feel: ${feel}°C`;
    document.querySelector(".description").innerHTML = description_2;
    document.querySelector(".wind").innerHTML = `Wind: ${wind} km/h`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(".pressure").innerHTML = `Pressure: ${pressure} mb`;

    console.log(data);
  });

// fetch(
//   "api.openweathermap.org/data/2.5/forecast?q=Zagreb&appid=74a3c5236462135661663f32160861f0&units=metric"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
