import React from 'react';

import ModuleForecastBox from "../component/ModuleForecastBox.jsx";
import NewWeatherIcon from "../component/NewWeatherIcon.jsx";


const Main = ({ locations }) => {
    return (
        <div className="main">
        <div className="block-one">
          <div className="block-one-country">
            <p>{locations.name}</p>
          </div>
            <NewWeatherIcon locations={locations}></NewWeatherIcon>
          <h1 className='block-temp'>{`${locations.temp}°`}</h1>
          <div className="forecast-day-container">
            {locations.hourForecast.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
          </div>
          {/* <div className="block-one-data">
            <div className="temp-data">
              <span>Ветер</span>
              <p>{`${locations.wind} м/с`}</p>
            </div>
            <div className="hum-data">
              <span>Влажность</span>
              <p>{`${locations.hum}%`}</p>
            </div>
          </div> */}
        </div>
        </div>
    );
}

export default Main;
