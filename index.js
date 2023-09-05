/*
    Making a weather app, getting API

*/
const weather_api_key = "df1fd18342690d43086da43326902da5";
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search");
const dailyQuotes = document.querySelector(".quotes");
const todayHighlightsBtn = document.getElementById("highlights");
const hourlyBtn = document.getElementById("hourly");
const forecastBtn = document.getElementById("forecast");
const todoListBtn = document.getElementById("todo");
const weatherInfoContainer = document.getElementById("weather-info");

// a list of weather motivational quotes to put depending on the current city weather and motivation quotes incase we don't match the cities weather
const weatherMotivationQuotes = [
	{
		weatherCondition: "Clear Sky",
		quote: "Every clear sky brings a new opportunity. Seize the day!",
	},
	{
		weatherCondition: "Cloudy",
		quote: "Behind every cloud, there is a silver lining. Keep smiling!",
	},
	{
		weatherCondition: "Rainy",
		quote:
			"Let the rain wash away your worries, and may it bring a sense of peace.",
	},
	{
		weatherCondition: "Thunderstorm",
		quote: "Storms in life make us stronger. Embrace the thunder!",
	},
	{
		weatherCondition: "Snowy",
		quote:
			"Each snowflake is unique, just like you. Embrace your individuality!",
	},
	{
		weatherCondition: "Foggy",
		quote: "In the fog of uncertainty, find your path and keep moving forward.",
	},
	{
		weatherCondition: "Windy",
		quote:
			"Let the wind carry away your troubles, and may it bring in fresh opportunities.",
	},
	{
		weatherCondition: "Misty",
		quote:
			"Misty days can be mysterious and beautiful. Enjoy the mystery of life!",
	},
	{
		weatherCondition: "Sunny",
		quote:
			"Sunshine is nature’s way of giving you a warm hug. Spread the warmth!",
	},
	{
		weatherCondition: "Partly Cloudy",
		quote: "Life is a mix of sunshine and clouds. Embrace the beauty of both.",
	},
];
const genericMotivationQuotes = [
	"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
	"Success is not final, failure is not fatal: It is the courage to continue that counts.",
	"Your time is limited, don't waste it living someone else's life.",
	"The only way to do great work is to love what you do.",
	"In the middle of every difficulty lies opportunity.",
	"The only limit to our realization of tomorrow will be our doubts of today.",
	"Don't watch the clock; do what it does. Keep going.",
	"Your positive action combined with positive thinking results in success.",
	"The future belongs to those who believe in the beauty of their dreams.",
	"You are never too old to set another goal or to dream a new dream.",
];

// today's highlight btn

// hourly btn
const hourlyData = [
	{
		time: "Now",
		icon: "/weather-icons/weather/clear-sky.png",
		temperature: "65&deg;",
	},
	{
		time: "2 hours",
		icon: "/weather-icons/weather/rain.png",
		temperature: "68&deg;",
	},
	{
		time: "4 hours",
		icon: "/weather-icons/weather/rainy.png",
		temperature: "55&deg;",
	},
	{
		time: "6 hours",
		icon: "/weather-icons/weather/snow.png",
		temperature: "45&deg;",
	},
	{
		time: "8 hours",
		icon: "/weather-icons/weather/sunny.png",
		temperature: "70&deg;",
	},
];

let isHourlyCreated = false;

hourlyBtn.addEventListener("click", () => {
	if (!isHourlyCreated) {
		// create the hourly section
		const hourlySection = document.createElement("section");
		hourlySection.id = "hourly-container";
		// creating title
		const hourlyTitle = document.createElement("h3");
		hourlyTitle.classList.add("hourly-title");
		hourlyTitle.textContent = "Hourly";
		// create time div
		const timeContainer = document.createElement("div");
		timeContainer.id = "time";
		// create a for loop to the run each hourlyData and make it create elements and add classes to finish this data
		hourlyData.forEach((dataObject) => {
			// create the hourly container
			const hourlyContainer = document.createElement("div");
			hourlyContainer.classList.add("h-container");
			// create the ul element
			const hourlyUl = document.createElement("ul");
			hourlyUl.classList.add("time");
			// create the li elements
			const timeLi = document.createElement("li");
			timeLi.classList.add("time");
			timeLi.textContent = hourlyData.time;
		});
	}
});

//5-day forecast

// need to create a forecast data that will get the day, weather type and temperature
const forecastData = [
	{
		day: "Now",
		icon: "/weather-icons/weather/clear-sky.png",
		temperature: "65&deg;",
	},
	{
		day: "Monday",
		icon: "/weather-icons/weather/rain.png",
		temperature: "68&deg;",
	},
	{
		day: "Tuesday",
		icon: "/weather-icons/weather/rainy.png",
		temperature: "55&deg;",
	},
	{
		day: "Wednesday",
		icon: "/weather-icons/weather/snow.png",
		temperature: "45&deg;",
	},
	{
		day: "Thursday",
		icon: "/weather-icons/weather/sunny.png",
		temperature: "70&deg;",
	},
	{
		day: "Friday",
		icon: "/weather-icons/weather/sunny.png",
		temperature: "70&deg;",
	},
	{
		day: "Saturday",
		icon: "/weather-icons/weather/sunny.png",
		temperature: "70&deg;",
	},
	{
		day: "Sunday",
		icon: "/weather-icons/weather/sunny.png",
		temperature: "70&deg;",
	},
];

let isForecastCreated = false;

forecastBtn.addEventListener("click", () => {
	if (!isForecastCreated) {
		// creates the hourly section container
		const daySection = document.createElement("section");
		daySection.id = "day-container";
		// now we need to create the title of the selection
		const dayTitle = document.createElement("h3");
		dayTitle.classList = "d-title";
		dayTitle.textContent = "5 Day Forecast";
		// create a main container that will hold 5 days to show the weather
		const daysContainer = document.createElement("div");
		daysContainer.id = "days";
		//Run a for loop that will only show 5 days and create me a div>ul>li*3
		// created a for loop to run the data for 5 days
		const daysToDisplay = 5;
		for (let i = 0; i < daysToDisplay; i++) {
			const data = forecastData[i];
			// created a element to container the daily information
			const dailyContainer = document.createElement("div");
			dailyContainer.classList.add("d-container");
			// inside the daily container create a ul to hold all the li items
			const dailyUl = document.createElement("ul");
			dailyUl.classList.add("h-ul");
			// create the li element for "day"
			const dayForecast = document.createElement("li");
			dayForecast.classList.add("day-forecast");
			dayForecast.textContent = data.day;
			// create the li element for "icon"
			const dayWeatherIcon = document.createElement("li");
			const dayWeatherIconImg = document.createElement("img");
			dayWeatherIconImg.src = data.icon;
			dayWeatherIconImg.alt = "";
			dayWeatherIconImg.classList.add("weather");
			// after i created the li<img, i will appendChild it to put those two elements together before i appendChild everything when i click the button
			dayWeatherIcon.appendChild(dayWeatherIconImg);
			// create an li that will hold the temperature info
			const weatherTemp = document.createElement("li");
			weatherTemp.classList.add("deg");
			weatherTemp.textContent = data.temperature;
			// since i created all my elements and added the classes i can finally appendChild  the elements
			dailyUl.appendChild(dayForecast);
			dailyUl.appendChild(dayWeatherIcon);
			dailyUl.appendChild(weatherTemp);
			// appendChild the Ul in the daily container
			dailyContainer.appendChild(dailyUl);
			// appendChild the dailyContainer inside the daysContainer
			daysContainer.appendChild(dailyContainer);
			// appendChild the dayTitle and daysContainer inside the daySection
		}
		daySection.appendChild(dayTitle);
		daySection.appendChild(daysContainer);
		// append this inside the weather info container

		weatherInfoContainer.appendChild(daySection);

		isForecastCreated = true;
	}
});

// Function to update hourly weather data
async function updateHourlyWeather(cityName, apiKey, currentWeather) {
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
	const response = await fetch(url);
	const data = await response.json();
	const hourlyData = data.list.slice(2, 8);

	// Update the 'Now' section
	const nowContainer = document.querySelector(".h-container.now");
	const currentTemperature = Math.round(
		((currentWeather.main.temp - 273.15) * 9) / 5 + 32
	);
	const currentWeatherType = currentWeather.weather[0].main;
	const currentWeatherIcon = currentWeather.weather[0].icon;

	nowContainer.querySelector(".time.rn").textContent = "Now";
	nowContainer.querySelector(
		".weather"
	).src = `https://openweathermap.org/img/w/${currentWeatherIcon}.png`;
	nowContainer.querySelector(".weather").alt = currentWeatherType;
	nowContainer.querySelector(".deg").textContent = `${currentTemperature}°`;

	// Update the future hourly data
	const timeContainers = document.querySelectorAll(".h-container:not(.now)");

	timeContainers.forEach((container, index) => {
		if (index >= hourlyData.length) return;

		const forecast = hourlyData[index];
		const temperature = Math.round(
			((forecast.main.temp - 273.15) * 9) / 5 + 32
		);
		const weatherType = forecast.weather[0].main;
		const weatherIcon = forecast.weather[0].icon;

		container.querySelector(".time").textContent = `${index * 2 + 2} hours`;
		container.querySelector(
			".weather"
		).src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
		container.querySelector(".weather").alt = weatherType;
		container.querySelector(".deg").textContent = `${temperature}°`;
	});
}

function getWeatherData(cityName, apiKey) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const cityDiv = document.querySelector("#city");
			const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
			const date = new Date().toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
			});

			const location = `${data.name}, ${data.sys.country}`;
			const temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
			const weatherType = data.weather[0].main;
			const weatherIcon = data.weather[0].icon;

			cityDiv.querySelector(".day").textContent = day;
			cityDiv.querySelector(".date").textContent = date;
			cityDiv.querySelector(".location").textContent = location;
			cityDiv.querySelector(
				".temp"
			).innerHTML = `${temperature}&deg; <span class="degree">F</span>`;
			cityDiv.querySelector(".weather-type").textContent = weatherType;
			cityDiv.querySelector(
				".weather-icon"
			).innerHTML = `<img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherType}">`;

			updateHourlyWeather(cityName, apiKey, data).catch((error) =>
				console.error(error)
			);
		})
		.catch((error) => console.error(error));
}

searchBtn.addEventListener("click", () => {
	const cityName = searchInput.value;
	const apiKey = weather_api_key;
	getWeatherData(cityName, apiKey);
});
