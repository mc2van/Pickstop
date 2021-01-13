export default function Home({ changePage }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pickstop</h2>
        <p>
          Need help choosing something to eat?
        </p>
        <button onClick={() => changePage(1)}>Get Started</button>
      </header>
    </div>
  )
}