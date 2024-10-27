import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="404image"
          onerror="this.src='images/not_found.png';"
          alt="placeHolderImage"
        />

        <p>Welcome to Heins Ice</p>
      </header>
    </div>
  );
}

export default App;
