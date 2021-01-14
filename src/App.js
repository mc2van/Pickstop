import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home.js";
import Input from "./pages/Input.js"
import Result from "./pages/Result.js"

function App() {
    const [navigation, setNavigation] = useState(0);

    function hitcallback(callbackParams) {
        console.log(callbackParams);
      }
    
    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(hitcallback);
    }

    window.onload = () => {getCurrentLocation()}

    function useNavigation() {
        if (navigation === 0) {
            return <Home changePage={changePage} />;
        } else if (navigation === 1) {
            return <Input changePage={changePage} />;
        } else {
            return <Result changePage={changePage} />;
        }
    }

    function changePage(pageNumber) {
        setNavigation(pageNumber);
    }

    return <div className="App">{useNavigation()}</div>;
}

export default App;