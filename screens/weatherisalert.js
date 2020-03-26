function startDelay() {
  setTimeout(function(){ isAlert(); }, 10000);
}
function isAlert() {
	const apiUrl = "https://api.weather.gov/alerts/active?zone=IAC163";
	fetch(apiUrl)
		.then( (data) => data.json())
		.then( (weather) =>  weatherData(weather) )
		
	const weatherData = (data) => {
		var length = 0;
		for (i in data.features) {
			length = length + 1;
		}
		if (length > 0) {
		window.location.replace("weatheralert.html");
		} else {
		window.location.replace("announcements.html");
		}
	}
}