import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home.js";
import Q1 from "./pages/q1.js"
import Q2 from "./pages/q2.js"
import Q3 from "./pages/q3.js"
import Q4 from "./pages/q4.js"
import Q5 from "./pages/q5.js"
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
                <Q1 changePage={changePage} />
            )
        } else if (nav === 2) {
            return (
                <Q2 changePage={changePage} />
            )
        } else if (nav === 3) {
            return (
                <Q3 changePage={changePage} />
            )
        } else if (nav === 4) {
            return (
                <Q4 changePage={changePage} />
            )
        } else if (nav === 4) {
            return (
                <Q5 changePage={changePage} />
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