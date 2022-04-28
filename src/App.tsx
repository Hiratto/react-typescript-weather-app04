import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import './App.css';
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch("https://api.weatherapi.com/v1/current.json?key=c89708ff6e9a4a3b8e3111851222104&q=London&aqi=no")
    .then( res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
