import React, { useState } from "react";
import './App.css';
import Home from "./pages/Home.js";
import Input from "./pages/Input.js"
import Result from "./pages/Result.js"

function App() {

    function hitcallback(location) {
        console.log(location);
        userLocation.push(location.coords.latitude);
        userLocation.push(location.coords.longitude);
        console.log(userLocation)
      }
    var userLocation = []
    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(hitcallback);
    }
    window.onload = () => {getCurrentLocation()}
    
    const [navigation, setNavigation] = useState(0);

    function useNavigation() {
        if (navigation === 0) {
            return <Home changePage={changePage} />;
        } else if (navigation === 1) {
            return <Input changePage={changePage} />;
        } else {
            return <Result />;
        }
    }

    function changePage(pageNumber) {
        setNavigation(pageNumber);
    }

    return <div className="App">{useNavigation()}</div>;
}

export default App;