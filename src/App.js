import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Food Picker<br/>for<br/>Uber Eats</h2>
        <p>
          Need help choosing something to eat?
        </p>
        <form action="https://www.ubereats.com">
          <input type="submit" value="Get Started" />
        </form>
      </header>
    </div>
  );
}

export default App;
