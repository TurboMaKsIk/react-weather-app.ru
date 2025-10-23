import './index.css'
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import ModuleForecastBox from './component/ModuleForecastBox';
import DataModuls from './component/DataModuls';
import React from 'react';
import axios from 'axios';

const APPVERSE = '1.206';

const MOUNTH = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
];

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
        icon: res.data.forecast.forecastday[0].day.condition.icon,
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
      <div style={{position: 'fixed'}} className="container">
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
        <div className='forecast-future-title' style={{borderRadius: `0`}}>
          <p>{`Дата ${locations.forecastFuture.forecastday[1].date.slice(-2)} ${MOUNTH[9]}`}</p>
          <div className="forecast-future-block">
            {locations.forecastFuture.forecastday[1].hour.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
          </div>
        </div>
        <div className='forecast-future-title'>
          <p>{`Дата ${locations.forecastFuture.forecastday[2].date.slice(-2)}`}</p>
            <div className="forecast-future-block">
              {locations.forecastFuture.forecastday[2].hour.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
            </div>
        </div>
      </div>
      <div className="main" style={{flexDirection: `column`, alignItems: `center`}}>
        <h1 className='titleDataInfo'>Подробные данные</h1>
        <div className="block-one" style={{borderRadius: '0 0 30px 30px', flexDirection: `row`, flexWrap: `wrap` }}>
          <DataModuls dataText={`${locations.temp}*`}>Температура</DataModuls>
          <DataModuls dataText={`${locations.hum}%`}>Влажность</DataModuls>
          <DataModuls dataText={`${locations.wind}м/с`}>Скорость ветра</DataModuls>
        </div>
      </div>
      <p className='copyright'>© М. А. Шалаев, 2025</p>
      <p className='version'>{APPVERSE}</p>
    </div>
  );
}

export default App;