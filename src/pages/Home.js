export default function Home({ changePage }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Food Picker<br />for<br />Uber Eats</h2>
        <p>
          Need help choosing something to eat?
        </p>
        <button onClick={() => changePage(1)}>Get Started</button>
      </header>
    </div>
  )
}