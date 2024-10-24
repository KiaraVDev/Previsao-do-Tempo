import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInfos from './components/WeatherInformations/Weather-informations';
import WeatherInfosDays from './components/WeatherInfosDays/Weather-days';


function App() {
  const [weather, setWeather] = useState();
  const [weatherDays, setWeatherDays] = useState();
  const inputRef = useRef();

  // Buscar cidade
  async function searchCity() {
    const city = inputRef.current.value;
    const key = "c50987ddbc8ed132c755e806a352f76d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt-br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt-br&units=metric`
    const apiDataWeather = await axios.get(url);
    const apiInfoDays = await axios.get(url5Days);

    setWeatherDays(apiInfoDays.data)
    setWeather(apiDataWeather.data);
  }

  return (
    <div className='container'>
      <h1 className='text-01'>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfos weather={weather} />}
      {weatherDays && <WeatherInfosDays weatherDays={weatherDays}/>}
    </div>
  );
}

export default App;
