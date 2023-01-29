
import React, { useEffect, useState } from "react";
import ThisDay from './thisDay'
import CloudSvg from '../media/Cloud'
import SnowSVG from '../media/snow'
import RainSVG from '../media/rain'
import ThunderSVG from '../media/thunder.js'
import SunSVG from '../media/Sun.js'
import CloudSunSVG from '../media/CloudSun.js'

function OtherDays(props) {

    //let cityName = props.cityName
    const [data, setData] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    function handleClick() {
      setShowComponent(true);
    }
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.cityName}&appid=24f7e9aaebf5bd17c279f4139d15ccc5`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    if(data && data.list){
      return (
        
        <div className="main-screen">
          {showComponent && <ThisDay cityName = {props.cityName} />}
          <div className="section">
            <div className="other-days">
              {data.list
                .filter(item => item.dt_txt.endsWith("15:00:00"))
                .map(item => (
                <div className="other-days__card" key={item.id} onClick = {handleClick} >
                  <h1 className="card-day">{new Date(item.dt_txt).toLocaleString('uk-UA',{weekday: 'long', timeZone: 'UTC'})}</h1>
                  <h1 className="card-date">{new Date(item.dt_txt).getDate()}.{new Date(item.dt_txt).getMonth()+1}</h1>
                  <div className="card-weather-svg">
                      {item.weather[0].icon == '01d' || '01n' ? <SunSVG />: 
                      item.weather[0].icon == '02d' || '02n' ? <CloudSunSVG />: 
                      item.weather[0].icon == '03d' || '04d' || '50d'  ||'03n' ||'04n' ||'50n' ? <CloudSvg />: 
                      item.weather[0].icon == '09d' || '10d' || '09n' || '10n' ? <RainSVG />: 
                      item.weather[0].icon == '11d' || '11n' ? <ThunderSVG />: 
                      item.weather[0].icon == '13d' || '13n' ? <SnowSVG />: null
                      }
                  </div>
                  <div className="card-temperature">
                    <h1 className="card-temperature__num">{Math.round(item.main.temp-273)}</h1>
                    <h1 className="card-temperature__symbol">°</h1>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </div>
          
      );
    }

    else {
      return <div>Loading...</div>
    }
   


         
    
    export default OtherDays;
