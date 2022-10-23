let Weather={
    "apiKey":"4249d92ea97d558cbfd2d454f56b67d5",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;        
        const { temp , humidity,feels_like, temp_min, temp_max } = data.main;
        const temperature=Math.round(temp-273.15);
        const feelsLike = Math.round(feels_like-273.15);
        const tempmin = Math.round(temp_min-273.15);
        const tempmax = Math.round(temp_max-273.15);
        const { speed } = data.wind;
        const windSpeed = Math.round(speed*3.6);
        document.querySelector(".city").innerHTML="Weather in "+ name;
        document.querySelector(".temp").innerHTML=temperature+"°C";
        document.querySelector(".feels").innerHTML="Feels like: "+feelsLike+"°C";
        document.querySelector(".max").innerHTML="Max temp: "+tempmax+"°C";
        document.querySelector(".min").innerHTML="Min temp: "+tempmin+"°C";
        document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerHTML="Wind: "+ windSpeed + "Km/Hr";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".Search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click",function(){
    Weather.search();
});

document.querySelector(".Search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        Weather.search();
    }
});