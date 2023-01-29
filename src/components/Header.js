

function Header() {
  return (
    <div className="section">
      <header className="weather-search">
        <form action="">
          <input type="text" placeholder = "Місто"/>
          <button>Пошук</button>
        </form>
      </header>
    </div>
  );
}

export default Header;
