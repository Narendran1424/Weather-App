const inputbox=document.querySelector(".input-box");
const searchbtn=document.getElementById("searchbtn");
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description")
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const location_not_found=document.querySelector(".location-not-found")
const weather_body=document.querySelector(".weather-body")

searchbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value)
})

async function checkWeather(city){
    const api_key="88930c8f80b0ce0ebbc9aeefa972f447";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const Weather_data=await fetch(`${url}`)
    .then(response=>response.json())
    if(Weather_data.cod==='404'){
        location_not_found.style.display="flex"
        weather_body.style.display="none"
        return;
    }
    location_not_found.style.display="none"
    weather_body.style.display="flex"
    temperature.innerHTML=`${Math.round(Weather_data.main.temp - 273.15)}<sup>°C</sup>`
    description.innerHTML=`${Weather_data.weather[0].description}`
    humidity.innerHTML=`${Weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${Weather_data.wind.speed}Km/H`;

    switch (Weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src="images/cloud.png"
            break
        case 'Clear':
            weather_img.src="images/clear.png"
            break;  
        case 'Rain':
            weather_img.src="images/rain.png"
            break;      
        case 'Mist':
            weather_img.src="images/mist.png"
            break;
        case 'Snow':
            weather_img.src="images/snow.png" 
            break;
    }
}