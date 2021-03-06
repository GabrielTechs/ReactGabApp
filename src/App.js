import React from "react";
import "./App.css";
import "./components/common_styles/colors.css";
import "./components/common_styles/FontAwesomeIcon";

import IntroSlider from "./components/IntroSlider/IntroSlider";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Services from "./components/Services/Services";
import AboutUsHighlight from "./components/AboutUsHighlight/AboutUsHighlight";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <IntroSlider />
      <Services />
      <AboutUsHighlight />
      <Footer />
    </div>
  );
}

export default App;
