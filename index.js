async function getWeather() {
    try {
      // Get the city name from the input field
      const cityInput = document.querySelector("#cityName");
      const cityName = cityInput.value.trim(); // Trim any leading/trailing whitespace
  
      if (cityName === "") {
        alert("Please enter a city name");
        return;
      }
  
      // Fetch the weather data from the API
      const response = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`,
        {
          method: "GET",
        }
      );
  
      // Check if the response is not OK
      if (!response.ok) {
        alert("Invalid City Name");
        return;
      }
  
      // Convert the response to JSON
      const weatherDetail = await response.json();
  
      // Check for an error in the API response
      if (weatherDetail.error) {
        alert("Invalid City Name");
        return;
      }
  
      // Destructure the weather details
      const { temp_c: temperature, condition: { text: weatherCondition }, wind_kph: windSpeed } = weatherDetail.current;
  
      // Append the weather details to the HTML DOM
      document.querySelector("#temp").innerHTML = `Temperature: ${temperature}°C`;
      document.querySelector("#temp_condition").innerHTML = `Condition: ${weatherCondition}`;
      document.querySelector("#wind_speed").innerHTML = `Wind Speed: ${windSpeed} km/h`;
    } catch (err) {
      alert("Something went wrong, check your internet connection");
    }
  }
  