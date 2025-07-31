import './index.css'
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import React from 'react';


function App() {
  const [city, setCity] = useState('Serdobsk');
  const [locations, setLocation] = useState({});
  const [currents, setCurrent] = useState({condition: {text: 'none', icon: 'none'}});

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=5affe47452424a17a68185535252407&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(res => {
      setLocation(res.location);
      setCurrent(res.current);
    })
    .catch(err => console.log(err.message))
  }, [city, setCity]);
  console.log(currents);
  return (
    <div className="container">
      <Header setCity={setCity}></Header>
      <Main state={locations} currents={currents}/>
      <p className='copyright'>© М. А. Шалаев, 2025</p>
    </div>
  );
}

export default App;