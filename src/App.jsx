import './index.css'
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import DataModuls from './component/DataModuls';
import ForecastBlock from './component/ForecastBlock';
import TitleComponent from './component/TitleComponent';
import HUMICON from './img/humagince.png';
import TEMPICON from './img/temperature.png';
import WINDICON from './img/wind.png';
import axios from 'axios';

const APPVERSE = 'Vers 1.777';

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
  const [city, setCity] = useState('Сердобск');
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
      setLoading(false);
      console.error('Ошибка загрузки! ' + error.name);
      error.status === 400 ? setError(`вы ввели не существующий город!`):setError(false);
    })
  }

  const getDataMounth = (num) => {
    let mounth = locations.forecastFuture.forecastday[num].date.slice(-5, -3);
    let day = locations.forecastFuture.forecastday[num].date.slice(-2);
    return `Дата ${day} ${MOUNTH[--mounth]}`
  }

  if (!loading) {
    return (
        <div className='loader-block'>
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
        <TitleComponent>Прогноз погоды</TitleComponent>
        <ForecastBlock locations={locations} getDataMounth={getDataMounth} thisDay={1}></ForecastBlock>
        <ForecastBlock locations={locations} getDataMounth={getDataMounth} thisDay={2}></ForecastBlock>
      </div>
      <div className="main" style={{flexDirection: `column`, alignItems: `center`}}>
        <TitleComponent>Подробные данные</TitleComponent>
        <div className="block-one" style={{borderRadius: '0 0 30px 30px', flexDirection: `row`, justifyContent: 'space-around', flexWrap: `wrap`, marginTop: `20px` }}>
          <DataModuls dataText={`${locations.temp}°`} propImg={TEMPICON}>Температура</DataModuls>
          <DataModuls dataText={`${locations.hum}%`} propImg={HUMICON}>Влажность</DataModuls>
          <DataModuls dataText={`${locations.wind}м/с`} propImg={WINDICON}>Скорость ветра</DataModuls>
        </div>
      </div>
      <p className='copyright'>© М. А. Шалаев, 2025</p>
      <p className='version'>{APPVERSE}</p>
    </div>
  );
}

export default App;