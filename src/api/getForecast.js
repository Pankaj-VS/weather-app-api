const api_key = "2af91673f4a65428c7f744d535683c95";

const getForecast = async function(city){
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
    const res = await fetch(urlForecast);
    const data = await res.json();

    const forcastList = [];
    const days = 3;
    const interval = 8;

    for(let i = 0; i < data.list.length && i < days * interval; i += interval)
        forcastList.push({
            Id: data.list[i].dt,
            Date: `${data.list[i].dt_txt}`,
            Temp: `${(data.list[i].main.temp - 273.15).toFixed(2)}°C`,
            Humidity: `${data.list[i].main.humidity}% `,
            Wind: `${data.list[i].wind.speed}Km/hr`
        });

    return forcastList;
}

export default getForecast;