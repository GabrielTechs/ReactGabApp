import React from "react";
import "./App.css";

import IntroSlider from "./components/IntroSlider/IntroSlider";

function App() {
  return (
    <div className="App">
      <IntroSlider />
      <div style={{ padding: "50px", background: "cyan" }}>
        <h1>Hello!</h1>
      </div>
    </div>
  );
}

export default App;
