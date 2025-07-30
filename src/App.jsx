import './index.css'
import tempIcon from './img/temperature.png'
import humIcon from './img/humagince.png'
import Sun from './img/sun.png'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className='header-title'>WEATHER-APP</h1>
        <form className='form-app' action="" method="post">
          <input type="text" placeholder='введите город...'/>
        </form>
      </header>
      <div className="main">
        <div className="block-one">
          <h1 className='block-temp'>32C*</h1>
          <h1 className='block-time'>12:00</h1>
          <div className="block-one-country">
            <p>город</p>
            <p>страна, регион</p>
          </div>
          <div className="block-one-data">
            <div className="temp-data">
              <span>Температура</span>
              <p>12 C</p>
            </div>
            <div className="hum-data">
              <span>Влажность</span>
              <p>20 %</p>
            </div>
          </div>
        </div>
        <div className="block-two">
          <img src={Sun} alt="" className='block-two-icon' />
          <h1>Солнечно</h1>
        </div>
      </div>
      <p>© М. А. Шалаев, 2025</p>
    </div>
  );
}

export default App;