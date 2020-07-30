import React from "react";
import "./App.css";
import "./components/common_styles/colors.css";
import "./components/common_styles/FontAwesomeIcon";

import IntroSlider from "./components/IntroSlider/IntroSlider";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroSlider />
    </div>
  );
}

export default App;
