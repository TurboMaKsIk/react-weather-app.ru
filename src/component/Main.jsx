import React from 'react';
import Sun from '../img/sun.png'

const Main = ({ state, currents }) => {
    return (
        <div className="main">
        <div className="block-one">
          <h1 className='block-temp'>{currents.temp_c}°</h1>
          <h1 className='block-time'>{state.localtime}</h1>
          <div className="block-one-country">
            <p>{state.name}</p>
            <p>{state.country}, {state.region}</p>
          </div>
          <div className="block-one-data">
            <div className="temp-data">
              <span>Ветер</span>
              <p>{currents.wind_mph}</p>
            </div>
            <div className="hum-data">
              <span>Влажность</span>
              <p>{currents.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="block-two">
          <img src={currents.condition.icon} alt="" className='block-two-icon' />
          <h1>{currents.condition.text}</h1>
        </div>
        </div>
    );
}

export default Main;
