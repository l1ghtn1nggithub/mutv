function getWeather() {
	const apiUrl = "https://api.weather.gov/gridpoints/DVN/65,68/forecast";
	fetch(apiUrl)
		.then( (data) => data.json())
		.then( (weather) =>  weatherData(weather) )
		
	const weatherData = (data) => {
		document.getElementById("todaytitle").innerHTML = data.properties.periods[0].name;
		document.getElementById("latertitle").innerHTML = data.properties.periods[1].name;
		document.getElementById("tomorrowtitle").innerHTML = data.properties.periods[2].name;
		document.getElementById("currentweather").innerHTML = data.properties.periods[0].detailedForecast;
		document.getElementById("laterweather").innerHTML = data.properties.periods[1].detailedForecast;
		document.getElementById("tomorrowweather").innerHTML = data.properties.periods[2].detailedForecast;
		document.getElementById('currentimage').src = data.properties.periods[0].icon;
		document.getElementById('laterimage').src = data.properties.periods[1].icon;
		document.getElementById('tomorrowimage').src = data.properties.periods[2].icon;
	}
}