// const displayClock = () => {
//   const display = new Date().toLocaleTimeString();
//   document.querySelector(".clock").innerHTML = `Local time: ${display}`;
//   setTimeout(displayClock, 1000);
// };

// window.onload = displayClock();

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=74a3c5236462135661663f32160861f0&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const cityName = data.name;
    const temperature = data.main.temp.toFixed(1);
    const feel = data.main.feels_like.toFixed(1);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const description_2 =
      description.charAt(0).toUpperCase() + description.slice(1);

    document.querySelector(".name").innerHTML = cityName;
    document.querySelector(".temp").innerHTML = `${temperature}°C`;
    document.querySelector(".feel").innerHTML = `Real feel: ${feel}°C`;
    document.querySelector(".description").innerHTML = description_2;
    document.querySelector(".wind").innerHTML = `Wind: ${wind} km/h`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(".pressure").innerHTML = `Pressure: ${pressure} mb`;

    const icon = document.createElement("img");
    icon.src =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.querySelector(".icon_2").appendChild(icon);

    console.log(data);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Split&appid=74a3c5236462135661663f32160861f0&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const cityName = data.name;
    const temperature = data.main.temp.toFixed(1);
    const feel = data.main.feels_like.toFixed(1);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const description_2 =
      description.charAt(0).toUpperCase() + description.slice(1);

    document.querySelector(".name_2").innerHTML = cityName;
    document.querySelector(".temp_2").innerHTML = `${temperature}°C`;
    document.querySelector(".feel_2").innerHTML = `Real feel: ${feel}°C`;
    document.querySelector(".description_2").innerHTML = description_2;
    document.querySelector(".wind_2").innerHTML = `Wind: ${wind} km/h`;
    document.querySelector(".humidity_2").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(
      ".pressure_2"
    ).innerHTML = `Pressure: ${pressure} mb`;

    const icon = document.createElement("img");
    icon.src =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.querySelector(".icon").appendChild(icon);

    console.log(data);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Osijek&appid=74a3c5236462135661663f32160861f0&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const cityName = data.name;
    const temperature = data.main.temp.toFixed(1);
    const feel = data.main.feels_like.toFixed(1);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const description_2 =
      description.charAt(0).toUpperCase() + description.slice(1);

    document.querySelector(".name_3").innerHTML = cityName;
    document.querySelector(".temp_3").innerHTML = `${temperature}°C`;
    document.querySelector(".feel_3").innerHTML = `Real feel: ${feel}°C`;
    document.querySelector(".description_3").innerHTML = description_2;
    document.querySelector(".wind_3").innerHTML = `Wind: ${wind} km/h`;
    document.querySelector(".humidity_3").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(
      ".pressure_3"
    ).innerHTML = `Pressure: ${pressure} mb`;

    const icon = document.createElement("img");
    icon.src =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.querySelector(".icon_3").appendChild(icon);

    console.log(data);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Rijeka&appid=74a3c5236462135661663f32160861f0&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    const cityName = data.name;
    const temperature = data.main.temp.toFixed(1);
    const feel = data.main.feels_like.toFixed(1);
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;

    const description_2 =
      description.charAt(0).toUpperCase() + description.slice(1);

    document.querySelector(".name_4").innerHTML = cityName;
    document.querySelector(".temp_4").innerHTML = `${temperature}°C`;
    document.querySelector(".feel_4").innerHTML = `Real feel: ${feel}°C`;
    document.querySelector(".description_4").innerHTML = description_2;
    document.querySelector(".wind_4").innerHTML = `Wind: ${wind} km/h`;
    document.querySelector(".humidity_4").innerHTML = `Humidity: ${humidity}%`;
    document.querySelector(
      ".pressure_4"
    ).innerHTML = `Pressure: ${pressure} mb`;

    const icon = document.createElement("img");
    icon.src =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.querySelector(".icon_4").appendChild(icon);

    console.log(data);
  });

// fetch(
//   "api.openweathermap.org/data/2.5/forecast?q=Zagreb&appid=74a3c5236462135661663f32160861f0&units=metric"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
