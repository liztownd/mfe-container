import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingAppComponent from "./components/MarketingApp";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import AuthAppComponent from "./components/AuthApp";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthAppComponent} />
            <Route path="/" component={MarketingAppComponent} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
