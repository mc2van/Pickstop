import { useState } from "react";

export default function Input({ changePage }) {
    const [array, setArray] = useState([]);
    const [input, setInput] = useState("");

    function populateArray() {
        setArray([...array, input]);
        setInput("");
    }

    function removeFromArray(index) {
        let tempArray = array;
    
        tempArray.splice(index, 1);
        setArray([...tempArray]);
    }
    
      const submitInput = (e) => {
        if (e.key === "Enter") {
          populateArray();
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Enter your restaurants</h1>
                <ul>
                    {array.map((element, i) => {
                    return (
                    <li key={i}>
                        {element}
                        <button onClick={() => removeFromArray(i)}>Remove</button>
                    </li>
                    );
                    })}
                </ul>
                <input
                    type="text"
                    placeholder="Restaurant"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={submitInput}
                />
                <div class="button-div">
                    <button onClick={() => changePage(2)}>Submit</button>
                </div>
            </header>
        </div>
    )
}