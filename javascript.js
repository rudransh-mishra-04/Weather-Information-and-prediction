const apikey = "0abea0687b14e2da569505093d98ef3b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function check_weather(city){
    const response=await fetch(apiURL+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed+"km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="Mist.png";
    }
}
searchBtn.addEventListener("click",()=>{
    check_weather(searchBox.value);
})
