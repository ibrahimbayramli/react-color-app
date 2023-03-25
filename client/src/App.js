import './App.css';
import {useEffect, useState} from "react";
import Palatte from "./components/Palatte"
import {init, subscribe} from "./socketApi";

function App() {
    const [activeColor, setActiveColor] = useState("#282c34")
    useEffect(() => {
        init();
        subscribe((color) => {
            setActiveColor(color)
        });
    }, [])
    return (
        <div className="App" style={{backgroundColor: activeColor}}>

            <h1>{activeColor}</h1>

            <Palatte/>

        </div>
    );
}

export default App;
