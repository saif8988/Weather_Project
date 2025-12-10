const cityInput = document.getElementById("cityInput");
const weatherIcon = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

function showWeather() {
    let city = cityInput.value.toLowerCase();

    if (city === "rajshahi") {
        cityElement.innerText = "Rajshahi";
        tempElement.innerText = "33°C";
        humidityElement.innerText = "40%";
        windElement.innerText = "12 km/h";
        weatherIcon.src = "images/sun.png";
    }
    else if (city === "dhaka") {
        cityElement.innerText = "Dhaka";
        tempElement.innerText = "27°C";
        humidityElement.innerText = "60%";
        windElement.innerText = "15 km/h";
        weatherIcon.src = "images/rain.png";
    }
    else if (city === "khulna") {
        cityElement.innerText = "Khulna";
        tempElement.innerText = "29°C";
        humidityElement.innerText = "55%";
        windElement.innerText = "10 km/h";
        weatherIcon.src = "images/cloud.png";
    }
    else if (city === "rangpur") {
        cityElement.innerText = "Rangpur";
        tempElement.innerText = "25°C";
        humidityElement.innerText = "70%";
        windElement.innerText = "20 km/h";
        weatherIcon.src = "images/storm.png";
    }
    else if (city === "sylhet") {
        cityElement.innerText = "Sylhet";
        tempElement.innerText = "22°C";
        humidityElement.innerText = "75%";
        windElement.innerText = "16 km/h";
        weatherIcon.src = "images/moon.png";
    }
    else {
        cityElement.innerText = "City Not Found";
        tempElement.innerText = "--°C";
        humidityElement.innerText = "--%";
        windElement.innerText = "-- km/h";
        weatherIcon.src = "images/error.png";
    }

    cityInput.value = "";
}

document.querySelector(".search button").addEventListener("click", showWeather);