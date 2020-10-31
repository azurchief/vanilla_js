const weather = document.querySelector(".js-weather"); 
/* note : querySelector is for selecting it from CSS...but this looks like  to select class in html as well? */
/* for more: see W3 school. https://www.w3schools.com/js/js_json_intro.asp */

const API_KEY = "3acbbe0d3c8690142ba17125de8e23f8";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
        .then(function(response) {
        return response.json(); /* let json to stringify the response got from server -> as JS object https://www.w3schools.com/js/js_json_intro.asp */
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

/* mistake: spent 30mins! : Must! group that function/const with ${} first! to let them interact as intended. */
    /* https://stackoverflow.com/questions/33091948/using-openweathermap-api-gives-401-error */

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Unable to obtain your geo location. You need to give permission of it.")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();