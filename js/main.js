const APP_ID= "60878e2a0b29c2ea3a7e815a4650e9bd"
const informationView = new InformationView();
const formView = new FormView();
const onSubmitHandler = (searchQuery) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=${APP_ID}&q=${searchQuery}&units=metric`)
    .then((response) => response.json())
    .then((data) =>{
        let nameOfCity = data["name"];
        let tempOfCity = data.main["temp"] + " °C";
        let descriptionOfSky = data.weather[0]["description"];
        let iconImage = data.weather[0]["icon"];
        let humidityResult = data.main["humidity"];
        let windResult = data.wind["speed"];

        informationView.setCity(new City(nameOfCity, tempOfCity, descriptionOfSky, humidityResult, windResult, iconImage));
        informationView.render();
    })
}

formView.setSubmitHandler(onSubmitHandler);
