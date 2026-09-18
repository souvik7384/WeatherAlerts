


function searchCity() {

    const input =
        document.getElementById("cityInput");

    const city =
        input.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    document.getElementById("cityName")
        .textContent = city + ", India";

    input.value = "";

    // Demo update
    loadWeather(city);
}


function loadWeather(city) {

    const weather = {

        temperature: 31,
        feelsLike: 34,
        condition: "Partly Cloudy",
        humidity: 70,
        rain: 65,
        wind: 17,
        uv: 6

    };


    document.getElementById("todayTemp")
        .textContent = weather.temperature;


    document.getElementById("feelsLike")
        .textContent = weather.feelsLike + "°C";


    document.getElementById("todayCondition")
        .textContent = weather.condition;


    document.getElementById("humidity")
        .textContent = weather.humidity + "%";


    document.getElementById("rain")
        .textContent = weather.rain + "%";


    document.getElementById("wind")
        .textContent = weather.wind + " km/h";


    document.getElementById("uv")
        .textContent = weather.uv;
}