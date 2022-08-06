class FormView {
    constructor() {

        this.onSubmit = null;

        document.getElementById('mainForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.searchWeather(document.getElementById("cityInput").value);
        })

    }

    searchWeather(cityInput) {
        this.onSubmit(cityInput);
    }

    setSubmitHandler(onSubmit) {
        this.onSubmit = onSubmit;
    }
}