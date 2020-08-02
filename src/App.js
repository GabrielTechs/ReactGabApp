import React from "react";
import "./App.css";
import "./components/common_styles/colors.css";
import "./components/common_styles/FontAwesomeIcon";

import IntroSlider from "./components/IntroSlider/IntroSlider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Highlight from "./components/HighlightCard/HighlightCard";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroSlider />
      <Highlight
        highlightCard="borderRight"
        highlightHeader="hello"
        highlightDescription="Fugiat sit culpa nulla ullamco cupidatat esse enim laboris enim minim nulla deserunt."
      />
    </div>
  );
}

export default App;
