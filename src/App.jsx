import './index.css'
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import ModuleForecastBox from './component/ModuleForecastBox';
import React from 'react';
import axios from 'axios';


function App() {
  const [error, setError] = useState(false);
  const [city, setCity] = useState('Serdobsk');
  const [locations, setLocation] = useState();
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      apitech();
      document.title = `${city} | погода`;
      setError(false);
    }, [city]);

    
  const apitech = () => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=5affe47452424a17a68185535252407&q=${city ? city:'Сердобск'}&days=3&aqi=no&alerts=no`)
    .then(res => {
      setLocation(e => ({
        ...e,
        temp: res.data.current.temp_c,
        hum: res.data.current.humidity,
        wind: res.data.current.wind_mph,
        name: res.data.location.name,
        country: res.data.location.country,
        region: res.data.location.region,
        code: res.data.current.condition.code,
        text: res.data.current.condition.text,
        is_day: res.data.current.is_day,
        hourForecast: res.data.forecast.forecastday[0].hour,
        forecastFuture: res.data.forecast,
      }));
      setLoading(true);
      console.log(res.data.forecast);
    })
    .catch(error => {
      console.error('Ошибка загрузки! ' + error.name);
      error.status === 400 ? setError(`вы ввели не существующий город!`):setError(false);
      setLoading(false);
    })
  }

  if (!loading) {
    return (
      <div className="container">
        <h1 className='loader-title'>Загрузка данных</h1>
        <span className='loader'></span>
      </div>
    );
  }
  return (
    <div className="container">
      {error && <p className='error-title'>{error}</p>}
      <Header setCity={setCity} setError={setError}></Header>
      <Main locations={locations}/>
      <div className="forecast-future-container">
      <h1>Прогноз погоды</h1>
        <div className='forecast-future-title'>
          <p>{`Дата ${locations.forecastFuture.forecastday[1].date}`}</p>
          <div className="forecast-future-block">
            {locations.forecastFuture.forecastday[1].hour.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
          </div>
        </div>
        <div className='forecast-future-title'>
          <p>{`Дата ${locations.forecastFuture.forecastday[2].date}`}</p>
            <div className="forecast-future-block">
              {locations.forecastFuture.forecastday[2].hour.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
            </div>
        </div>
      </div>
      <p className='copyright'>© М. А. Шалаев, 2025</p>
      <p className='version'>v 1.202</p>
    </div>
  );
}

export default App;