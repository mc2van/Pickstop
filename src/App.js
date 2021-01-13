import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home.js";
import Input from "./pages/Input.js"
import Result from "./pages/Result.js"

function App() {
    const [nav, setNav] = useState(0);

    function useNav() {
        if (nav === 0) {
            return (
                <Home changePage={changePage} />
            )
        } else if (nav === 1) {
            return (
                <Input changePage={changePage} />
            )
        } else {
            return (
                <Result changePage={changePage} />
          )
        }
    }

    function changePage(pageNum){
        setNav(pageNum);
    }

    return <div className="App">{useNav()}</div>
}

export default App;