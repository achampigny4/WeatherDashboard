$(function () {
    //global variables
    // current date
    const currentDate = moment().format("MM/DD/YYYY");
    //current weather icon
    let cityWeatherIcon = $("#current-icon");

    //search button on click function
    $("button").on("click", function () {
        //prevent page refresh
        event.preventDefault();

        //search input
        let city = $('#search').val().trim();

        //console.log/////////////////////////////////////////////////////
        // console.log(city);

        //store city API URL for weather
        let cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a59b92bab7df562dc4f082669ec387d`
        // console.log(cityURL); ///////////////////////////////////////////////

        // GET request to cityURL
        $.get(cityURL).then(function (response) {

            // console.log/////////////////////////////////////////////////
            // console.log(response);


            //empty search input alert
            if (city === "") {
                alert("Please add City, State, USA or City, Country");
            } else {
                // (storeCity('city')) 
                //store city to local storage
                window.localStorage.setItem('city', JSON.stringify(city));
            }

        //City
        let currentCity = response.name;
        // weather icon 
        let weatherIcon = response.weather[0].icon;
        let weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        //weather description
        let currentWeather = response.weather[0].description;
        //temperature converted to fahrenheit
        let tempF = Math.floor((response.main.temp - 273.15) * 1.80 + 32);
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

//global var after save to localStorage
// city history for buttons
var city = JSON.parse(window.localStorage.getItem("city")) || [];
    // Buttons for the search history
    // const searchedCityBtn = $('#searched-city-btn');


    // 2    //on click city is added to url to use api for displaying 5 day forecast
    // 3    //on click city is dynamically made into a button below search
    //move function above on click of sumbit button
    // function cityButton(){
    // };
    // 5    //on click previous searched city will display current and 5 day forecasts    

    // end code
});