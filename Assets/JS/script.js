//api key
//add value of input



function onload() {




const apikey = "&appid=beeea19259945355a46d5432f515ce32";

//add event listener
$("#searchBtn").on("click", function() {
    console.log(alert)

    let city= document.getElementById ("cityName").value;
    let queryURL ="https://api.openweathermap.org/data/2.5/forecast?appid="+APIKey+"&q="+city+"&count=6"+"&units=imperial";

    axios.get(queryURL)
            .then(function (response) {

            document.getElementById("location").innerText = response.data.city.name +" ("+ response.data.list[0].dt_txt+")";
            document.getElementById("temp").innerText = "Temperature: " + response.data.list[0].main.temp +" °F";
            document.getElementById("humidity").innerText = "Humidity: " + response.data.list[0].main.humidity +"%";
            document.getElementById("wind").innerText = "Wind Speed: " + response.data.list[0].wind.speed+" MPH";


            document.getElementById("date").innerText = response.data.list[10].dt_txt;
            let icon = "https://openweathermap.org/img/w/" + response.data.list[10].weather[0].icon + ".png";
            $('#icon').attr('src', icon);
            document.getElementById("temp").innerText = "Temperature: " + response.data.list[10].main.temp+" °F";
            document.getElementById("humidity").innerText = "Humidity: " + response.data.list[10].main.humidity+"%";
})



})


//value from user/search
//url to call api link
