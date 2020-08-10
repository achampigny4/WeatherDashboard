$(function () {
    //global variables
    // current date
    const currentDate = moment().format("MM/DD/YYYY");
    let cityWeatherIcon = $("#current-icon");

    //search input
    let city = [];
    // City history for buttons
    // let cityHistory = JSON.parse(window.localStorage.getItem('cityHistory')) || [];
    // Buttons for the search history
    // const searchedCityBtn = $('#searched-city-btn');

    function storeCity() {
        localStorage.setItem('city', JSON.stringify(city));
    };

    //search button on click function
    $("button").on("click", function () {
        //prevent page refresh
        event.preventDefault();

        //search input
        let city = $('#search').val().trim();

        //console.log/////////////////////////////////////////////////////
        // console.log(city);

        //empty search input alert
        if (city === "") {
            alert("Please add City, State, USA or City, Country");
        } else (storeCity('city'));

        //store city API URL for weather
        let cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a59b92bab7df562dc4f082669ec387d`

        // GET request to cityURL
        $.get(cityURL).then(function (response) {

            // console.log/////////////////////////////////////////////////
            console.log(response);

            //City
            let currentCity = response.name;
            // weather icon 
            let weatherIcon = response.weather[0].icon;
            let weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
            //weather description
            let currentWeather = response.weather[0].description;
            //temperature converted to fahrenheit
            let tempF = Math.floor(response.main.temp - 273.15) * 1.80 + 32;
            //Humidity percentage
            let currentHumidity = response.main.humidity;
            //Current wind speed
            let currentWind = response.wind.speed;

            //display results
            $("#current-city").text(currentCity + " (" + currentDate + ")");
            $("#current-icon").append(cityWeatherIcon.attr("src", weatherIconURL));
            $("#current-description").text(currentWeather);
            $("#current-temp").text("Temperature: " + tempF + " °F");
            $("#current-humidity").text("Humidity: " + currentHumidity + " %");
            $("#current-wind").text("Wind speed: " + currentWind + " MPH");

            //create button of searched city
            // cityButton();
        });
    });

    // 2    //on click city is added to _ to use api key for displaying 5 day forecast
    // 3    //on click city is dynamically made into a button below search
    //move function above on click of sumbit button
    // function cityButton(){
    // };
    // 4    //on click city input is added to the local storage
    // 5    //on click previous searched city will display current and 5 day forecasts    

    // end code
});