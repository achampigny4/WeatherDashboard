$(function () {

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
        }

        //store city API URL for weather
        let cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a59b92bab7df562dc4f082669ec387d`

        // GET request to cityURL
        $.get(cityURL).then(function (response) {

            // console.log/////////////////////////////////////////////////
            // console.log(response);

        });
    });


    // 1    //on click city is added to _ to use api key for displaying current weather
    // 2    //on click city is added to _ to use api key for displaying 5 day forecast
    // 3    //on click city is dynamically made into a button below search
    // 4    //on click city input is added to the local storage
    // 5    //on click previous searched city will display current and 5 day forecasts    

    // end code
});