import '../WeatherInformations/Weather-informations.css'

function WeatherInfos({weather}){

    return(
        <div className='weather-container'>
            <h1>{weather.name}</h1>
            <div className='weather-infos'>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
            <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    )
}
export default WeatherInfos