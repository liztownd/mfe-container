import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingAppComponent from "./components/MarketingApp";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
