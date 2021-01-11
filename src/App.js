import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./pages/Home.js";
import Q1 from "./pages/q1.js"
import Q2 from "./pages/q2.js"
import Q3 from "./pages/q3.js"
import Q4 from "./pages/q4.js"
import Q5 from "./pages/q5.js"
import Result from "./pages/Result.js"

function counter(i) {
    if (i === 0) {
        return (
            <Home />
        )
    } else if (i === 1) {
        return (
            <Q1 />
        )
    } else if (i === 2) {
        return (
            <Q2 />
        )
    } else if (i === 3) {
        return (
            <Q3 />
        )
    } else if (i === 4) {
        return (
            <Q4 />
        )
    } else if (i === 4) {
        return (
            <Q5 />
        )
    } else {
      return (
        <Result />
      )
    }
}

function App() {
    return (
        <Home />
    )
}

export default App;