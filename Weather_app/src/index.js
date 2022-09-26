//let weather = {
  //  paris: {
   //   temp: 19.7,
    //  humidity: 80
   // },
   // tokyo: {
   //   temp: 17.3,
    //  humidity: 50
    //},
    //lisbon: {
    //  temp: 30.2,
     // humidity: 20
    //},
   // "san francisco": {
    //  temp: 20.9,
    //  humidity: 100
    //},
    //moscow: {
    //  temp: -5,
    //  humidity: 20
    //}
 // };

  //let city = prompt("Enter a city?");
  //city = city.toLowerCase();
  //city = city.trim();
  
  //if (weather[city] !== undefined) {
   // var temperature = weather[city].temp;
   // var humidity = weather[city].humidity;
   // var celsiusTemperature = Math.round(temperature);
   // var fahrenheitTemperature = Math.round(temperature * 9 / 5 + 32);
   // alert("It is currently " + celsiusTemperature + "°C ("+ fahrenheitTemperature + "°F) in "+ city + " with a humidity of " + humidity + "%");

 // } else {
  //  alert("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+"+ city);
  //}


  function date1(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let day1 = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[day1];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function search(event) {
    event.preventDefault();
    let city1 = document.querySelector("#city");
    let city2 = document.querySelector("#city-input");
    city1.innerHTML = city2.value;
  }
  
  function convertFahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 66;
  }
  
  function convertCelsius(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = 19;
  }
  
  let date = document.querySelector("#date");
  let time = new Date();
  date.innerHTML = date1(time);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let fahrenheit2 = document.querySelector("#fahrenheit-link");
  fahrenheit2.addEventListener("click", convertFahrenheit);
  
  let celsius2 = document.querySelector("#celsius-link");
  celsius2.addEventListener("click", convertCelsius);
  