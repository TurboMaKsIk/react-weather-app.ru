import React from 'react';
import NewWeatherIcon from './NewWeatherIcon';


const ModuleForecastBox = ({ locations }) => {
    return (
        <div className="forecast-day-box">
            <div className="forecast-day-time">{locations.time.slice(-5)}</div>
            <img src={locations.condition.icon} className="forecast-day-weather"/>
            <span></span>
            <div className="forecast-day-temp">{`${locations.temp_c}°`}</div>
        </div>
    );
}

export default ModuleForecastBox;

