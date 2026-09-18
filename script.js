// ===============================
// CITY SEARCH
// ===============================

function searchCity() {

    const input = document.getElementById("cityInput");
    const city = input.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    document.getElementById("cityName").textContent =
        city + ", India";

    input.value = "";

    // Demo data
    loadDemoWeather(city);
}


// ===============================
// DEMO WEATHER DATA
// ===============================

function loadDemoWeather(city) {

    const weatherData = {

        temperature: 31,
        feelsLike: 34,
        condition: "Partly Cloudy",
        humidity: 70,
        wind: 16,
        visibility: 9,
        uv: 6

    };

    document.getElementById("temperature").textContent =
        weatherData.temperature;

    document.getElementById("feelsLike").textContent =
        weatherData.feelsLike + "°C";

    document.getElementById("weatherCondition").textContent =
        weatherData.condition;

    document.getElementById("humidity").textContent =
        weatherData.humidity + "%";

    document.getElementById("wind").textContent =
        weatherData.wind + " km/h";

    document.getElementById("visibility").textContent =
        weatherData.visibility + " km";

    document.getElementById("uv").textContent =
        weatherData.uv;
}


// ===============================
// DARK MODE
// ===============================

const darkModeBtn =
    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});


// ===============================
// CURRENT DATE
// ===============================

const today = new Date();

const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
};

document.getElementById("date").textContent =
    today.toLocaleDateString("en-US", options);