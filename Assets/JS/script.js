//var url = "https://api.openweathermap.org/data/2.5/forecast?q=";
//var currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";


//search button
var btn = document.querySelector("#button");
//text box where you input the city name
var cityName = document.querySelector("#cityName");

var result = document.querySelector("currentCity")
var locationdate = document.querySelector("locationdate");
var temp = document.querySelector("temp");
var humidity = document.querySelector("humidity");
var wind = document.querySelector("wind");
var UV = document.querySelector("UV")

var apiKey = "b0687da62cb3bc7b420e13260ea2df0b";




btn.onclick = function(){
  const city = cityName.value;
  var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=' + apiKey;
  console.log(apiURL);
  $.get(apiURL, function(data) {
    console.log(data);
    
    $("#locationname").text(data.name);
    $("#tempText").text(data.main.temp);
    $("#humidityText").text(data.main.humidity);
    $("#windText").text(data.wind.speed);
    //$("#currPhoto").append(data.weather[0].icon);

    //adding a date to current day and 5 day forecast
    let currentTime = moment().subtract(10, 'days').calendar();
    console.log(currentTime);

    function displayDate () {
    $("#currentDate").text(currentTime);
    };
    displayDate();
    
    // one call API for 5 day and grabbing the UV for current 
    let otherApi =  'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial' +'&appid=' + apiKey;
    console.log(otherApi);
    $.get(otherApi, function(forecast) {
    console.log(forecast);

    //Pull the UV from one call API to current weather location div
    $("#uvText").text(forecast.current.uvi);

    //5-day forecast Day 1
    $("#dayOne").text(forecast.daily[1].temp.day);
    $("#humid1").text(forecast.daily[1].humidity);

    //5-day forecast Day 2
    $("#dayTwo").text(forecast.daily[2].temp.day);
    $("#humid2").text(forecast.daily[2].humidity);

    //5-day forecast Day 3
    $("#dayThree").text(forecast.daily[3].temp.day);
    $("#humid3").text(forecast.daily[3].humidity);

    //5-day forecast Day 4
    $("#dayFour").text(forecast.daily[4].temp.day);
    $("#humid4").text(forecast.daily[4].humidity);

    //5-day forecast Day 5
    $("#dayFive").text(forecast.daily[5].temp.day);
    $("#humid5").text(forecast.daily[5].humidity);
 

    //save in local storage


    //localStorage.setItem("cities", JSON.stringify(data));

    
    
    })
  });
//   fetch(apiURL).then(response => {
//   response.json().then(json => {
//     let data = json;
//     console.log (data);
//     $("#tempText").text(data.main.temp);
//   });
//  });
}


