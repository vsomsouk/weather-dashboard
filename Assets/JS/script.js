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
  var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  console.log(apiURL);
  $.get(apiURL, function(data) {
    console.log(data);
    $("#locationname").text(data.name);
    $("#tempText").text(data.main.temp);
    $("#humidityText").text(data.main.humidity);
    $("#windText").text(data.wind.speed);
    //$("#uvText").text(data.main.);

    let otherApi =  'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.main.lat + '&lon=' + data.main.lon + '&appid=' + apiKey;
    $.get(otherApi, function(forecast) {
      // add forecast to HTML
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


