function getAlerts() {
	const apiUrl = "https://api.weather.gov/alerts/active?zone=IAC163";
	fetch(apiUrl)
		.then( (data) => data.json())
		.then( (weather) =>  weatherData(weather) )
		
	const weatherData = (data) => {
		for (i in data.features) {
			var title = document.createElement("p");
			title.innerHTML = data.features[i].properties.headline;
			document.body.appendChild(title);
			var instructions = document.createElement("p");
			instructions.innerHTML = data.features[i].properties.instruction;
			document.body.appendChild(instructions);
			var space = document.createElement("br");
			document.body.appendChild(space);
		}
	}
}