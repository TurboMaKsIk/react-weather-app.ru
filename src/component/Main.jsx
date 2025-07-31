import React from 'react';
import Sun from '../img/sun.png'

const Main = ({ locations }) => {
    return (
        <div className="main">
        <div className="block-one">
          <h1 className='block-temp'>{`${locations.temp}°`}</h1>
          <div className="block-one-country">
            <p>{locations.name}</p>
            <p>{`${locations.country}, ${locations.region}`}</p>
          </div>
          <div className="block-one-data">
            <div className="temp-data">
              <span>Ветер</span>
              <p>{`${locations.wind} м/с`}</p>
            </div>
            <div className="hum-data">
              <span>Влажность</span>
              <p>{`${locations.hum}%`}</p>
            </div>
          </div>
        </div>
        <div className="block-two">
          <img src={locations.icon} alt="" className='block-two-icon' />
          <h1>{locations.text}</h1>
        </div>
        </div>
    );
}

export default Main;
