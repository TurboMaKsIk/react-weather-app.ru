import Sunny from "../img/icon/sunny-day-3.svg";
import SunnyNight from "../img/icon/sunny-night-3.svg";
import SunnyCloudyNight from "../img/icon/sunny-to-cloudy-night.svg";
import CloudyRainyNight from "../img/icon/cloudy-to-rainy-night.svg";
import Overcast from "../img/icon/overcast-5.svg";
import SunnyCloudy from "../img/icon/sunny-to-cloudy-day.svg"; 
import CloudyRuiny from "../img/icon/cloudy-to-rainy-day.svg";
import lightning from "../img/icon/lightning-22.svg";
import ModerateRain from "../img/icon/moderate-rain-5.svg";
import HeavyRain from "../img/icon/heavy-rain-10.svg";
import LightRain from "../img/icon/light-rain.svg";
import RainBold from "../img/icon/thunder-shower-9.svg";
import RainStorm from "../img/icon/thunder-shower-9.svg";

const NewWeatherIcon = ({ locations }) => {
    const createNewIcon = (e) => {
      if (e.is_day === 1) {
        if (e.code === 1000) {
          return Sunny;
        }
        else if (e.code === 1003) {
          return SunnyCloudy;
        }
        else if (e.code === 1006) {
          return Overcast;
        }
        else if (e.code === 1009) {
          return Overcast;
        }
        else if (e.code === 1063) {
          return LightRain;
        }
        else if (e.code === 1183 || e.code === 1180) {
          return ModerateRain;
        }
        else if (e.code === 1087) {
          return lightning;
        }
        else if (e.code === 1195) {
          return HeavyRain;
        }
        else if (e.code === 1246) {
          return RainStorm;
        }
        else if (e.code === 1276) {
          return RainBold;
        }
      } else {
        if (e.code === 1000) {
          return SunnyNight;
        }
        else if (e.code === 1003) {
          return SunnyCloudyNight;
        }
        else if (e.code === 1087) {
          return lightning;
        }
      }
    }
  
    return (
      <div className="block-two">
        <img src={createNewIcon(locations)} alt="" className='block-two-icon' />
      </div>
    );
  }

export default NewWeatherIcon;