// App.js
// App.js
import React from "react";
import "./App.css";
import Navbar from "./components/reusable/navbar/Navbar";
// import Slider from "./components/reusable/slider/Slider";
import Router from "./components/config/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router /> {/* This component should not contain another BrowserRouter */}
    </div>
  );
}

export default App;

