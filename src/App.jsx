import './index.css'
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
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
    axios.get(`https://api.weatherapi.com/v1/current.json?key=5affe47452424a17a68185535252407&q=${city ? city:'Сердобск'}&aqi=no`)
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
      }));
      setLoading(true);
    })
    .catch(error => {
      console.error('Ошибка загрузки! ' + error.name);
      error.status === 400 ? setError(`вы ввели не существующий город!`):setError(false);
      setLoading(true);
    })
  }

  if (!loading) {
    return (
      <h1>Минуту, подождите</h1>
    );
  }
  return (
    <div className="container">
      {error && <p className='error-title'>{error}</p>}
      <Header setCity={setCity} setError={setError}></Header>
      <Main locations={locations}/>
      <p className='copyright'>© М. А. Шалаев, 2025</p>
    </div>
  );
}

export default App;