


//button
$("searchBtn").on("click", function(event) {
    event.preventDefault();

    var apiKey = "&appid=beeea19259945355a46d5432f515ce32";

    var getWeather = $("#get-weather");
    var city = getWeather.val().trim();
    cities.push(city)
    var message = document.querySelector(".invalid-message");
     
    console.log(getWeather);

    var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&q=" +
    city + "&appid=" + apiKey;

    //GET AJAX
  $.ajax({
    url: queryURL,
    method: "GET"
  })
 