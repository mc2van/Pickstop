export default function Result( { userLocation }) {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Pickstop</h2>
                <p>
                   { userLocation[1] }
                </p>
            </header>
        </div>
    )
}