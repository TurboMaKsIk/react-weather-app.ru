import React from 'react'
import ModuleForecastBox from './ModuleForecastBox'


const ForecastBlock = ({ locations, getDataMounth, thisDay }) => {
  return (
        <div className='forecast-future-title' style={{borderRadius: `0`}}>
          <p>{getDataMounth(thisDay)}</p>
          <div className="forecast-future-block">
            {locations.forecastFuture.forecastday[thisDay].hour.map(e => <ModuleForecastBox locations={e} key={e.time} />)}
          </div>
        </div>
  )
}

export default ForecastBlock