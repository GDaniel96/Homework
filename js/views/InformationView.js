class InformationView {
    constructor() {
        this.selectedCity = null;
    }

    setCity(selectedCity) {
        this.selectedCity = selectedCity;
    }

    render() {
        if (this.selectedCity !== null) {
            document.getElementById("cityResult").innerHTML = `Weather in ${this.selectedCity.nameOfCity}`;
            document.getElementById("temperature").innerHTML = `${this.selectedCity.tempOfCity}`;
            document.getElementById("skyDescription").innerHTML = `${this.selectedCity.descriptionOfSky}`;
            document.getElementById("icon").src = `http://openweathermap.org/img/wn/${this.selectedCity.iconImage}@2x.png`;
            document.getElementById("humidity").innerHTML = `Humidity: ${this.selectedCity.humidityResult}%`;
            document.getElementById("wind").innerHTML = `Wind speed: ${this.selectedCity.windResult} km/h`;
        } else {
            console.log('Missing city')
        }
    };
}

