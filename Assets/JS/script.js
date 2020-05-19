//var url = "https://api.openweathermap.org/data/2.5/forecast?q=";
//var currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";


//search button
var btn = document.querySelector("#button");
//text box where you input the city name
var cityName = document.querySelector("#cityName");

var apiKey = "b0687da62cb3bc7b420e13260ea2df0b";



btn.onclick = function(){
  const city = cityName.value;
  var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  console.log(apiURL);
  fetch(apiURL).then(response => {
  response.json().then(json => {
    let data = json;
    console.log (data);
  //  let output = formatResponse(data);
  //  resultOut.innerHTML = output;
  });
 });
}