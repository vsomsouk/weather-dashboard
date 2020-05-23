//search button
var btn = document.querySelector("#button");

//text box where you input the city name
var cityName = document.querySelector("#cityName");
var apiKey = "b0687da62cb3bc7b420e13260ea2df0b";

const CITY = 'CITY';
var cities = JSON.parse(localStorage.getItem(CITY))
if(cities === null){
 cities = [];
}
console.log(cities)

for(var i = 0; i < cities.length; i++){
  $(".cities").append("<ul class='c'>" + cities[i] + "</ul>")
}




//when I click the search button...
btn.onclick = function () {
  const city = cityName.value;
  var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=' + apiKey;
  console.log(apiURL);
  $.get(apiURL, function (data) {
    console.log(data);
    // printing the data from api on page
    $("#locationname").text(data.name);
    $("#tempText").text(data.main.temp);
    $("#humidityText").text(data.main.humidity);
    $("#windText").text(data.wind.speed);

    //adding a date to current day and 5 day forecast.
    let currentDate = moment().calendar("DD-MM-YYYY");
    let currentAdd1 = moment().add(1, 'days').calendar("DD-MM-YYYY");
    let currentAdd2 = moment().add(2, 'days').calendar("DD-MM-YYYY");
    let currentAdd3 = moment().add(3, 'days').calendar("DD-MM-YYYY");
    let currentAdd4 = moment().add(4, 'days').calendar("DD-MM-YYYY");
    let currentAdd5 = moment().add(5, 'days').calendar("DD-MM-YYYY");
    console.log(currentDate);

    function displayDate() {
      $("#currentDate").text(currentDate);
      $("#date1").text(currentAdd1);
      $("#date2").text(currentAdd2);
      $("#date3").text(currentAdd3);
      $("#date4").text(currentAdd4);
      $("#date5").text(currentAdd5);
    };
    displayDate();

    // one call API for 5 day forecast
    let otherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&units=imperial' + '&appid=' + apiKey;
    console.log(otherApi);
    $.get(otherApi, function (forecast) {
      console.log(forecast);

      //pull the UV from one call API to current weather location div
      $("#uvText").text(forecast.current.uvi);

      //temp, humidity & icon for 5 day forecast

      //5-day forecast Day 1
      $("#dayOne").text(forecast.daily[1].temp.day);
      $("#humid1").text(forecast.daily[1].humidity);
      var icon1 = forecast.daily[1].weather[0].icon;
      var iconURL1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
      $(".icon1").attr('src', iconURL1);

      //5-day forecast Day 2
      $("#dayTwo").text(forecast.daily[2].temp.day);
      $("#humid2").text(forecast.daily[2].humidity);
      var icon2 = forecast.daily[2].weather[0].icon;
      var iconURL2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
      $(".icon2").attr('src', iconURL2);

      //5-day forecast Day 3
      $("#dayThree").text(forecast.daily[3].temp.day);
      $("#humid3").text(forecast.daily[3].humidity);
      var icon3 = forecast.daily[3].weather[0].icon;
      var iconURL3 = "http://openweathermap.org/img/w/" + icon3 + ".png";
      $(".icon3").attr('src', iconURL3);

      //5-day forecast Day 4
      $("#dayFour").text(forecast.daily[4].temp.day);
      $("#humid4").text(forecast.daily[4].humidity);
      var icon4 = forecast.daily[4].weather[0].icon;
      var iconURL4 = "http://openweathermap.org/img/w/" + icon4 + ".png";
      $(".icon4").attr('src', iconURL4);

      //5-day forecast Day 5
      $("#dayFive").text(forecast.daily[5].temp.day);
      $("#humid5").text(forecast.daily[5].humidity);
      var icon5 = forecast.daily[5].weather[0].icon;
      var iconURL5 = "http://openweathermap.org/img/w/" + icon5 + ".png";
      $(".icon5").attr('src', iconURL5);

      //creating a list of cities
      $(".cities").append("<ul class='c'>" + city + "</ul>");
      cities.push(city)
      
      localStorage.setItem(CITY, JSON.stringify(cities));
      //Clicking the saved cities and it will show the weather




    })

    

  });
}

// click previous searched city and load data.
$(".c").click(function(event){
  console.log("hello")
});






