const WEATHER_API_Key = "d8b1e5c0106cbdedd225d056ab2e0fd1"; // MAILE GELEN API
const WEB_URL = "https://api.openweathermap.org/data/2.5/weather"; // URL
const city = prompt();

//https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d8b1e5c0106cbdedd225d056ab2e0fd1

const QUERY = `?q=${city}&APPID=${WEATHER_API_Key}&units=metric`;

var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("windSpeed");
var cityName = document.getElementById("cityName");
var description = document.getElementById("description");
var weatherIcon = document.getElementById("weatherIcon");

const weather = async () => {
  //asinxron funksiya yaradiriq (funksiyanin ozu asinxron olur onu sora cagiracq)
  const response = await fetch(`${WEB_URL}${QUERY}`, {
    //burada await yaziriqki belke cavabi backend vermedise gozdesin ne vaxd verecek onda qayitsin .
    // morterzenin  icindede keynen query ni birlesdirik cunki objectler orda yerlesir
    method: "GET", //get get getir demekdir
  });
  console.log(response);

  let data = await response.json();
  console.log(data);
  INFO(data);
};

weather();

function INFO(element) {
  temp.textContent = element.main.temp;
  humidity.textContent = element.main.humidity;
  windSpeed.textContent = element.wind.speed;
  description.textContent = element.weather[0].description;
  cityName.textContent = element.name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`;
}
