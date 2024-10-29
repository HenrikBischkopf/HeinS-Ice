import "./App.css";

import { DarkModeToggle } from "./compnents/DarkModeToggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heins Ice</h1>
        <DarkModeToggle></DarkModeToggle>
        <img
          src={`${process.env.PUBLIC_URL}/img/logoIceWaffle.svg`}
          //className="App-logo"
          alt="logo"
          height={200}
          width={200}
        />
        <p className="Attribution">Designed by Freepick.</p>
        <p>Welcome to Heins Ice.</p>
        <p>Is it Ice or Waffle season?</p>
        <div className="linkBox">
          <a href="/link1">Ice Season</a>
          <a href="/link2">Waffle Season</a>
        </div>
      </header>
    </div>
  );
}

export default App;
