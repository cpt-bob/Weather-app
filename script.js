const apiUrl = "";//"https://openweathermap.org/api" proper url would go here
const apiKey = "";//put apiKey here

const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('weather-icon');

async function checkWeather (city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    alert("Invalid City Name")
  } else {

    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector('.humidity')=innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = 'images/clear.png'
    } else if (data.weather[0].main === 'Rain') {
      weatherIcon.src = 'images/rain.png'
    } else if (data.weather[0].main === 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png'
    } else if (data.weather[0].main === 'Mist') {
      weatherIcon.scr = 'images/mist.png'
    } else if (data.weather[0].main === 'Snow') {
      weatherIcon.scr = 'images/snow.png'
    }

    document.querySelector('.weather').style.display = 'block'
  }
}

searchButton.addEventListener('click', () => {
  checkWeather(searchBox.value);
})
