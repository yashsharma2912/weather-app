const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const hmd = document.querySelector('.humidity');
const wsp = document.querySelector('.wspeed');
const lnf = document.querySelector('.loc-n-f');
const weatherBody = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "cbaa020f5f4559b126cecb3e0f1546b1 ";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
  
    if(weather_data.cod === '404'){
        lnf.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return ;
    }

        lnf.style.display = "none";
        weatherBody.style.display = "flex";
        
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wsp.innerHTML = `${weather_data.wind.speed}Km/H`;


            switch(weather_data.weather[0].main) {
            case 'Clouds' : 
            weather_img.src = "cloud.png";
            break;
            case 'Clear' : 
            weather_img.src = "clear.png";
            break;
            case 'Rain' : 
            weather_img.src = "rain.png";
            break; 
            case 'Haze' : 
            weather_img.src = "mist.png";
            break;
            case 'Snow' : 
            weather_img.src = "snow.png";
            break;
             }
          
   console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
     checkWeather(inputBox.value);
});