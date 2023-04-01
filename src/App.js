import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Lawyers from "./components/Lawyers/Lawyers";
import AwesomeFeatures from "./components/Awesome-Features/AwesomeFeatures";
import Welcome from "./components/Welcome/Welcome";
import PracticeAreas from "./components/Practice-Areas/PracticeAreas";
import PlansPrices from "./components/Plans-Prices/PlansPrices";

const App = () => {
  return (
    <>
      <div className="container">
        <Main />
        <Lawyers />
        <AwesomeFeatures />
        <Welcome />
        <PracticeAreas />
        <PlansPrices />
      </div>
    </>
  );
};

export default App;
