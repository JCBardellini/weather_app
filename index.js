/*
    Making a weather app, getting API

*/
const dailyQuotes = document.querySelector(".quotes");
const todayHighlightsBtn = document.getElementById("highlights")
const hourlyBtn = document.getElementById("hourly")
const forecastBtn = document.getElementById("forecast")
const todoListBtn = document.getElementById("todo")
const weatherInfoContainer = document.getElementById("weather-info")

// a list of weather motivational quotes to put depending on the current city weather and motivation quotes incase we don't match the cities weather
const weatherMotivationQuotes = [
  {
    weatherCondition: "Clear Sky",
    quote: "Every clear sky brings a new opportunity. Seize the day!"
  },
  {
    weatherCondition: "Cloudy",
    quote: "Behind every cloud, there is a silver lining. Keep smiling!"
  },
  {
    weatherCondition: "Rainy",
    quote: "Let the rain wash away your worries, and may it bring a sense of peace."
  },
  {
    weatherCondition: "Thunderstorm",
    quote: "Storms in life make us stronger. Embrace the thunder!"
  },
  {
    weatherCondition: "Snowy",
    quote: "Each snowflake is unique, just like you. Embrace your individuality!"
  },
  {
    weatherCondition: "Foggy",
    quote: "In the fog of uncertainty, find your path and keep moving forward."
  },
  {
    weatherCondition: "Windy",
    quote: "Let the wind carry away your troubles, and may it bring in fresh opportunities."
  },
  {
    weatherCondition: "Misty",
    quote: "Misty days can be mysterious and beautiful. Enjoy the mystery of life!"
  },
  {
    weatherCondition: "Sunny",
    quote: "Sunshine is nature’s way of giving you a warm hug. Spread the warmth!"
  },
  {
    weatherCondition: "Partly Cloudy",
    quote: "Life is a mix of sunshine and clouds. Embrace the beauty of both."
  }
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
  "You are never too old to set another goal or to dream a new dream."
];



// today's highlight btn 

let isHighlightCreated = false;

todayHighlightsBtn.addEventListener("click", () => {
    if (!isHighlightCreated) {

        const highlightsSection = document.createElement("section");
        highlightsSection.id = "highlights-container";
        //title
        const highlightTitle = document.createElement("h3");
        highlightTitle.textContent = "Today's Highlights";
        highlightTitle.classList.add("title-highlights")

        // air-quality div

        const airQualityContainer = document.createElement("div");
        airQualityContainer.id = "air-quality";
        // air quality title 
        const airQualityTitle = document.createElement("h4");
        airQualityTitle.textContent = "Air Quality";
        airQualityTitle.classList.add("h-title");
        // new aq container 
        const aqContainer = document.createElement("div");
        aqContainer.classList.add("aq-container");
        // aq rating container 
        const aqRating = document.createElement("div");
        aqRating.classList.add("aq-rating");
        // creating the ul
        const aqListUl = document.createElement("ul");
        aqListUl.classList.add("ul-highlight");
        // creating the li for the air quality icon
        const aqRatingIcon = document.createElement("li");
        aqRatingIcon.classList.add("icons");
        // creating the icon img
        const aqRatingIconImg = document.createElement("img");
        aqRatingIconImg.src = "/weather-icons/wind.png";
        aqRatingIconImg.alt = "";
        // putting the icon inside the li
        aqRatingIcon.appendChild(aqRatingIconImg);
        // create the li for the rating info
        const aqRatingInfo = document.createElement("li");
        aqRatingInfo.classList.add("highlights-info", "rating");
        aqRatingInfo.textContent = "Good";
        // appending the rating info and rating icon into the aqListUl
        aqListUl.appendChild(aqRatingIcon);
        aqListUl.appendChild(aqRatingInfo);
        // appending the aqListUl into the aqRating div 
        aqRating.appendChild(aqListUl);
        // create a new div called pRating that will hold the pollutants
        const pRatingContainer = document.createElement("div");
        pRatingContainer.classList.add('p-rating');
        // creating the title and adding text to it
        const pTitle = document.createElement("h5");
        pTitle.classList.add("pollutants");
        pTitle.textContent = "Pollutants";
        // creating the ul for the different pollutants
        const pListUl = document.createElement("ul");
        pListUl.classList.add("ul-highlight", "p-info");
        // adding the li to it
        const pollutantO3 = document.createElement("li");
        pollutantO3.classList.add("highlights-info");
        pollutantO3.innerHTML = '<span class="color">O3:</span> 7.5';

        const pollutantSO2 = document.createElement("li");
        pollutantSO2.classList.add("highlights-info");
        pollutantSO2.innerHTML = '<span class="color">SO2:</span> 42';

        const pollutantNO2 = document.createElement("li");
        pollutantNO2.classList.add("highlights-info");
        pollutantNO2.innerHTML = '<span class="color">NO2:</span> 12';

        const pollutantCO = document.createElement("li");
        pollutantCO.classList.add("highlights-info");
        pollutantCO.innerHTML = '<span class="color">CO:</span> 12';
        // putting the pollutants to the UL
        pListUl.appendChild(pollutantO3);
        pListUl.appendChild(pollutantSO2);
        pListUl.appendChild(pollutantNO2);
        pListUl.appendChild(pollutantCO);
        // now i have to put the ul and title inside the p rating container
        pRatingContainer.appendChild(pTitle);
        pRatingContainer.appendChild(pListUl);
        // now i have to append the pRatingContainer in the aqContainer
        aqContainer.appendChild(aqRating);
        aqContainer.appendChild(pRatingContainer);
        // append the aqContainer inside airQualityContainer
        airQualityContainer.appendChild(aqContainer);

        // sunrise & sunset div, will repeat the steps as above

        const sunRiseSunSet = document.createElement("div");
        sunRiseSunSet.id = "sunset-sunrise";

        const sSTitle = document.createElement("h4");
        sSTitle.classList.add("h-title");
        sSTitle.textContent = "Sunrise & Sunset";

        //sunrise container
        const sunriseSunsetContainer = document.createElement("div");
        sunriseSunsetContainer.classList.add("s-container");

        const sunriseDiv = document.createElement("div");
        sunriseDiv.classList.add("sunrise");

        const sunriseTitle = document.createElement("h5");
        sunriseTitle.textContent = "Sunrise"

        const sunriseUlList = document.createElement("ul");
        sunriseUlList.classList.add("ul-highlight");

        const sunriseIcon = document.createElement("li");
        sunriseIcon.classList.add("icons");

        const sunriseIconImg = document.createElement("img");
        sunriseIconImg.src = "/weather-icons/sunrise.png";
        sunriseIconImg.alt = "";
        sunriseIcon.appendChild(sunriseIconImg);

        const sunriseInfo = document.createElement("li");
        sunriseInfo.classList.add("highlights-info", "s-rise");
        sunriseInfo.textContent = "6:32 AM";

        sunriseUlList.appendChild(sunriseIcon);
        sunriseUlList.appendChild(sunriseInfo);

        sunriseDiv.appendChild(sunriseUlList);
        //sunset container
        const sunsetDiv = document.createElement("div");
        sunriseDiv.classList.add("sunset");

        const sunsetTitle = document.createElement("h5");
        sunsetTitle.textContent = "Sunset"

        const sunsetUlList = document.createElement("ul");
        sunsetUlList.classList.add("ul-highlight");

        const sunsetIcon = document.createElement("li");
        sunsetIcon.classList.add("icons");

        const sunsetIconImg = document.createElement("img");
        sunsetIconImg.src = "/weather-icons/sunset.png";
        sunsetIconImg.alt = "";
        sunsetIcon.appendChild(sunsetIconImg);

        const sunsetInfo = document.createElement("li");
        sunsetInfo.classList.add("highlights-info", "s-set");
        sunsetInfo.textContent = "7:32 PM";

        sunsetUlList.appendChild(sunsetIcon);
        sunsetUlList.appendChild(sunsetInfo);

        sunsetDiv.appendChild(sunsetUlList);

        sunriseSunsetContainer.appendChild(sunriseDiv);
        sunriseSunsetContainer.appendChild(sunsetDiv);

        sunRiseSunSet.appendChild(sSTitle);
        sunRiseSunSet.appendChild(sunriseSunsetContainer);
        
        // humidity section
        const humidityDiv = document.createElement("div");
        humidityDiv.id = "humidity";

        const humidityTitle = document.createElement("h4");
        humidityTitle.classList.add("h-title");
        humidityTitle.textContent = "Humidity";

        const humidityUlList = document.createElement("ul");
        humidityUlList.classList.add("ul-highlight");

        const humidityIcon = document.createElement("li");
        humidityIcon.classList.add("icons");
        const humidityIconImg = document.createElement("img");
        humidityIconImg.src = "/weather-icons/humidity.png";
        humidityIconImg.alt = "humidity-icon";
        humidityIcon.appendChild(humidityIconImg);

        const humidityInfo = document.createElement("li");
        humidityInfo.classList.add("h-info", "highlights-info");
        humidityInfo.textContent = "88%";

        humidityUlList.appendChild(humidityIcon);
        humidityUlList.appendChild(humidityInfo);

        humidityDiv.appendChild(humidityTitle);
        humidityDiv.appendChild(humidityUlList);

        //Pressure 
        const pressureDiv = document.createElement("div");
        pressureDiv.id = "pressure";

        const pressureTitle = document.createElement("h4");
        pressureTitle.classList.add("h-title");
        pressureTitle.textContent = "Pressure";

        const pressureUlList = document.createElement("ul");
        pressureUlList.classList.add("ul-highlight");

        const pressureIcon = document.createElement("li");
        pressureIcon.classList.add("icons");
        const pressureIconImg = document.createElement("img");
        pressureIconImg.src = "/weather-icons/pressure.png";
        pressureIconImg.alt = "pressure-icon";
        pressureIcon.appendChild(pressureIconImg);

        const pressureInfo = document.createElement("li");
        pressureInfo.classList.add("p-info", "highlights-info");
        pressureInfo.textContent = "30.03 inHg";

        pressureUlList.appendChild(pressureIcon);
        pressureUlList.appendChild(pressureInfo);

        pressureDiv.appendChild(pressureTitle);
        pressureDiv.appendChild(pressureUlList);

        // visibility
        const visibilityDiv = document.createElement("div");
        visibilityDiv.id = "visibility";

        const visibilityTitle = document.createElement("h4");
        visibilityTitle.classList.add("h-title");
        visibilityTitle.textContent = "Visibility";

        const visibilityUlList = document.createElement("ul");
        visibilityUlList.classList.add("ul-highlight");

        const visibilityIcon = document.createElement("li");
        visibilityIcon.classList.add("icons");
        const visibilityIconImg = document.createElement("img");
        visibilityIconImg.src = "/weather-icons/visibility.png";
        visibilityIconImg.alt = "visibility-icon";
        visibilityIcon.appendChild(visibilityIconImg);

        const visibilityInfo = document.createElement("li");
        visibilityInfo.classList.add("v-info", "highlights-info");
        visibilityInfo.textContent = "9 mi";

        visibilityUlList.appendChild(visibilityIcon);
        visibilityUlList.appendChild(visibilityInfo);

        visibilityDiv.appendChild(visibilityTitle);
        visibilityDiv.appendChild(visibilityUlList);
        
        // feels like 
        const feelsLikeDiv = document.createElement("div");
        feelsLikeDiv.id = "feels-like";

        const feelsLikeTitle = document.createElement("h4");
        feelsLikeTitle.classList.add("h-title");
        feelsLikeTitle.textContent = "Feels Like";

        const feelsLikeUlList = document.createElement("ul");
        feelsLikeUlList.classList.add("ul-highlight");

        const feelsLikeIcon = document.createElement("li");
        feelsLikeIcon.classList.add("icons");
        const feelsLikeIconImg = document.createElement("img");
        feelsLikeIconImg.src = "/weather-icons/thermometer.png";
        feelsLikeIconImg.alt = "feels-Like-icon";
        feelsLikeIcon.appendChild(feelsLikeIconImg);

        const feelsLikeInfo = document.createElement("li");
        feelsLikeInfo.classList.add("t-info", "highlights-info");
        feelsLikeInfo.textContent = "65°";

        feelsLikeUlList.appendChild(feelsLikeIcon);
        feelsLikeUlList.appendChild(feelsLikeInfo);

        feelsLikeDiv.appendChild(feelsLikeTitle);
        feelsLikeDiv.appendChild(feelsLikeUlList);

        highlightsSection.appendChild(highlightTitle);
        highlightsSection.appendChild(airQualityContainer);
        highlightsSection.appendChild(sunRiseSunSet);
        highlightsSection.appendChild(humidityDiv);
        highlightsSection.appendChild(pressureDiv);
        highlightsSection.appendChild(visibilityDiv);
        highlightsSection.appendChild(feelsLikeDiv);
        
        weatherInfoContainer.appendChild(highlightsSection);

        isHighlightCreated = true;
    }
});

// hourly btn
const hourlyData = [
    { time: "Now", icon: "/weather-icons/weather/clear-sky.png", temperature: "65°" },
    { time: "2 hours", icon: "/weather-icons/weather/rain.png", temperature: "68°" },
    { time: "4 hours", icon: "/weather-icons/weather/rainy.png", temperature: "55°" },
    { time: "6 hours", icon: "/weather-icons/weather/snow.png", temperature: "45°" },
    { time: "8 hours", icon: "/weather-icons/weather/sunny.png", temperature: "70°" }
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
        hourlyData.forEach( (dataObject) => {
            // create the hourly container 
            const hourlyContainer = document.createElement("div")
            hourlyContainer.classList.add("h-container");
            // create the ul element
            const hourlyUl = document.createElement("ul");
            hourlyUl.classList.add("h-ul");
            // create the li elements 
            const timeLi = document.createElement("li");
            timeLi.classList.add("time");
            timeLi.textContent = dataObject.time;
            // weather icon li
            const hourlyWeatherLi = document.createElement("li");
            const hourlyWeatherIconImg = document.createElement("img");
            hourlyWeatherIconImg.src = dataObject.icon
            hourlyWeatherIconImg.classList.add("weather");
            hourlyWeatherLi.appendChild(hourlyWeatherIconImg);
            // temp li
            const hourlyTempLi = document.createElement("li");
            hourlyTempLi.classList.add("deg");
            hourlyTempLi.textContent = dataObject.temperature;
            // put the li inside the Ul
            hourlyUl.appendChild(timeLi)
            hourlyUl.appendChild(hourlyWeatherIconImg)
            hourlyUl.appendChild(hourlyTempLi)
            // put them inside the the div container
            hourlyContainer.appendChild(hourlyUl);
            // append to parent
            timeContainer.appendChild(hourlyContainer);
        });
    // put it inside the parent of the hourly container
    hourlySection.appendChild(hourlyTitle);
    hourlySection.appendChild(timeContainer);
    // add to the page container
    weatherInfoContainer.appendChild(hourlySection);
    // set it to true 
    isHourlyCreated = true;
    }
})

//5-day forecast

// need to create a forecast data that will get the day, weather type and temperature
const forecastData = [
    { day: "Now", icon: "/weather-icons/weather/clear-sky.png", temperature: "65°" },
    { day: "Monday", icon: "/weather-icons/weather/rain.png", temperature: "68°" },
    { day: "Tuesday", icon: "/weather-icons/weather/rainy.png", temperature: "55°" },
    { day: "Wednesday", icon: "/weather-icons/weather/snow.png", temperature: "45°" },
    { day: "Thursday", icon: "/weather-icons/weather/sunny.png", temperature: "70°" },
    { day: "Friday", icon: "/weather-icons/weather/sunny.png", temperature: "70°" },
    { day: "Saturday", icon: "/weather-icons/weather/sunny.png", temperature: "70°" },
    { day: "Sunday", icon: "/weather-icons/weather/sunny.png", temperature: "70°" }
];

let isForecastCreated = false;

forecastBtn.addEventListener("click", () => {
    if (!isForecastCreated) {
    // creates the hourly section container
    const daySection = document.createElement("section");
    daySection.id = "day-container"
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
        const dayForecast = document.createElement("li")
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
    };
    daySection.appendChild(dayTitle);
    daySection.appendChild(daysContainer);
    // append this inside the weather info container
    
    weatherInfoContainer.appendChild(daySection);

    isForecastCreated = true;
}
});

// todo list