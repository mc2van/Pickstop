export default function Input({ changePage }) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Enter your restaurants</h1>
                <p>(You don't have to fill all of these in)</p>
                <button onClick={() => changePage(2)}>Submit</button>
            </header>
        </div>
    )
}