const weatherApi = {
    key:'bab281d79e5f1e9755a68d754cc313e7',
    baseUrl:'https://api.openweathermap.org/data/2.5/weather?'
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const  searchInputBox = document.getElementById('input-box');
// Event Listener Function on keypress
searchInputBox.addEventListener('keypress',(Event)=>{
    if(Event.keyCode == 13)
    {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
});
//Get weatherreport
function getWeatherReport(city){
    fetch('${weatherApi.baseUrl}?q=${city}&appid={bab281d79e5f1e9755a68d754cc313e7}')
    .then(weather =>{
        return weather.json(showWeatherReport);
    }).then();
}
//Show wewther report
function showWeatherReport(weather){
    console.log(weather);
}
//Date manager
