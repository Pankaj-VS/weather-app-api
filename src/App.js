import { useState } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp/WeatherApp';
import WeatherForecast from './components/WeatherApp/WeatherForecast';

function App() {
  const [switcher, setSwitcher] = useState(true);

  const switchPage = () => setSwitcher(s => !s);

  return (
    <div className="App">
      {
      switcher ? <WeatherApp switchPage = {switchPage}/> : <WeatherForecast switchPage = {switchPage}/>
      }
    </div>
  );
}

export default App;
