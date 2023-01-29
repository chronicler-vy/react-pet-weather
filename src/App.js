import React, { useEffect, useState } from "react";
import './App.css';
import OtherDays from './components/otherDays'



function App() {
  const [inputOne, setInputOne] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  function handleClick() {
    setShowComponent(true);
  }
  return (
    <div className="weather-app">
      <div className="section">
        <header className="weather-search">

            <input type="text" placeholder = "Місто" value = {inputOne}  onChange={(event) => setInputOne(event.target.value)}/>
            <button onClick={handleClick}>Пошук</button>
        </header>
      </div>
        {showComponent && <OtherDays cityName = {inputOne} />}
      
    </div>
  );
}

export default App;
