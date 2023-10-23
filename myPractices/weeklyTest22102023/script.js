// Replace 'YOUR_API_KEY' with the actual API key you generated.
const apiKey = "b2a31025e652e46ac9478bf582126685";
let city = "allahabad"; // Replace with the city you want to get weather data for.

const mainDiv = document.getElementById("weatherDiv");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    showData();
});

function showData(){
    const cities = document.getElementById("text").value;
    console.log(cities);
    if(cities !=""){
        city = cities;
    }
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        // const temperature = data.main.temp;
        mainDiv.innerHTML = `
    <div class="location">
    <h1>${data.name}, ${data.sys.country}</h1>
</div>
        
<div class="current-weather">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    <h2>${25}°C</h2>
</div>
<div class="weather-details">
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${data.wind.speed} km/h</p>
</div>
    `;
        // console.log(`Temperature in ${city}: ${temperature}°C`);
        getforeCostData()
    })
    .catch((error) => {
        console.error("There was a problem fetching weather data:", error);
    });
}



const limit = 2;


const apiUrls = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`;

var datas;
fetch(apiUrls)
    .then((response) => {
            if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
    .then((data) => {
        // Use the geocoding data as needed.
          console.log('Geocoding Data:', data);
        data.map((ele) => {
            // console.log(ele.lat);
            // console.log(ele.lon);
            getforeCostData(ele.lat, ele.lon)
        });
    })
    .catch((error) => {
        console.error("There was a problem fetching geocoding data:", error);
    });
    
    const daysData = document.getElementById("7days");

    function getforeCostData(lat, lon) {
    const data16Days = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(data16Days)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            for(let i=0 ; i<4 ; i++){
                console.log(data.list[i]);
                const days = document.createElement("div");
                days.classList.add("weather-card");
                days.innerHTML = `
                <div class="day">${data.list[i].dt_txt}</div>
                    <div class="icon">
                        <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="Sunny">
                   </div>
                <div class="temperature">25°C</div>
                `;
                daysData.appendChild(days);
            }
        });
    }

    showData();