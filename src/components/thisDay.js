
function ThisDay(props) {
    return (
      <div className="section">
      <div className="thisDay-card">
          <p className="date">17.01, Вівторок</p>
          <h1 className="city-name">{props.cityName}</h1>
          <p className="weather-description">Не саншайн, але жити можна</p>
          <div className="weather-svg">
          <svg width="123" height="76" viewBox="0 0 123 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="85" cy="21" r="19.5" fill="#FFC700" stroke="#FF9900" stroke-width="3"/>
            <rect y="52" width="106" height="24" rx="12" fill="white"/>
            <circle cx="17" cy="48" r="14" fill="white"/>
            <circle cx="50.5" cy="37.5" r="27.5" fill="white"/>
            <circle cx="95.5" cy="48.5" r="27.5" fill="white"/>
          </svg>
          </div>
          <div className="main-temperature">
            <div className="main-temperature-num">
              3
            </div>
            <div className="main-temperature-symbol">
              °
            </div>
          </div>
          <div className="min-max-temperature">
              <div className="min-temperature">
                  <p className="min">-6°</p>
                  <p>min</p>
              </div>
              <div className="max-temperature">
              <p className="max">5°</p>
                  <p>max</p>
              </div>
          </div>
      </div>
    </div>
    );
  }
  
  export default ThisDay;
  