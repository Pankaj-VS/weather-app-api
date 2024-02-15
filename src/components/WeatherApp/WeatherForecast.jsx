import React, { useEffect, useState } from 'react';
import getForecast from '../../api/getForecast';

const WeatherForecast = (props) => {
    const [city, setCity] = useState("");
    const [data, setData] = useState([]);
    return( 
        <div>
            <button onClick={() => props.switchPage()}>Back</button>
            <input value={city} onChange={e => setCity(e.target.value)}/>
            <button onClick={async () => setData(await getForecast(city))}>Search</button>
            
            <ul>
                {data.map(d => <li key={d.Id}>Date: {d.Date} Temp: {d.Temp} Humidity: {d.Humidity} Wind: {d.Wind}</li>)}
            </ul>

        </div>
    );
}

export default WeatherForecast;