const select = document.getElementById("weather");
const paragraph = document.getElementById("weather-rec");

select.addEventListener("change", setWeather);

function setWeather() {
	const choice = select.value;
	if (choice === "sunny") {
		paragraph.innerText = "Don't wear too much clothes!";
	}
	else if (choice === "rainy") {
		paragraph.innerText = "Pitter patter, wear much clothes.";
	}
	else if (choice === "snowy"){
		paragraph.innerText = "Wear lots of much clothes.";
	}
	else if (choice === "overcast"){
		paragraph.innerText = "Wear clothes.";
	}
	else if (choice === "humid"){
		paragraph.innerText = "Wear no clothes.";
	}
	else{
		paragraph.innerText = "Make a decision please.";
	}
}