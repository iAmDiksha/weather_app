const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherData = document.getElementById('weather');
const apiKey = "05c91f55ab8268544676a509ce8b5f98";

searchBtn.addEventListener('click', ()=>{
    let cityName = searchInput.value;
    if(cityName)
    {
        getWeatherData(cityName);
    }
})

const getWeatherData = (city)=>{
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL).then(res => res.json())
    .then(data => {
        console.log(data)
        displayWeather(data);
    })
    .catch(err => console.log("Error fetching the weather data", err));
}

const displayWeather = (data)=>{
    const weatherInfo = `<h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: <b>${data.main.temp}°C</b></p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Description: ${data.weather[0].description}</p>`;
    weatherData.innerHTML = weatherInfo;

    const weather = data.weather[0].main.toLowerCase();
    const container = document.getElementById('container');
    if(weather.includes('rain'))
    {
        container.className = 'rain';
    }
    else if(weather.includes('mist') || weather.includes('fog'))
    {
        container.className = 'mist';
    }
    else if(weather.includes('haze')){
        container.className = 'haze';
    }
    else if(weather.includes('cloud'))
    {
        container.className = 'cloud';
    }
    else if(weather.includes('drizzle')){
        container.className = 'drizzle';
    }
    else if(weather.includes('clear') || weather.includes('clean'))
    {
        container.className = 'clear';
    }
    else if(weather.includes('thunder')){
        container.className = 'thunder';
    }
    else if(weather.includes('snow') || weather.includes('cold')){
        container.className = 'snow';
    }
    else if(weather.includes('wind') || weather.includes('storm')){
        container.className = 'wind';
    }
}



