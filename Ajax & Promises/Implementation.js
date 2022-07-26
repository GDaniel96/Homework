var cityInput = document.getElementById("city");
var submitButton = document.getElementById("button");


var apiId = "60878e2a0b29c2ea3a7e815a4650e9bd";

function searchWeather(cityInput) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=${apiId}&q=${cityInput.value}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            let nameOfCity = data["name"];
            let tempOfCity = data.main["temp"] + " °C";
            let descriptionOfSky = data.weather[0]["description"];
            let iconImage = data.weather[0]["icon"];
            let humidityResult = data.main["humidity"];
            let windResult = data.wind["speed"];

            document.getElementById("cityResult").innerHTML = `Weather in ${nameOfCity}`;
            document.getElementById("temperature").innerHTML = `${tempOfCity}`;
            document.getElementById("skyDescription").innerHTML = `${descriptionOfSky}`;
            document.getElementById("icon").src = `http://openweathermap.org/img/wn/${iconImage}@2x.png`;
            document.getElementById("humidity").innerHTML = `Humidity: ${humidityResult}%`;
            document.getElementById("wind").innerHTML = `Wind speed: ${windResult} km/h`;
        })
        .catch(error => alert("Error:  " + error));
}

submitButton.addEventListener("click", function () {
    searchWeather(cityInput);
})

cityInput.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        searchWeather(cityInput);
    }
});
