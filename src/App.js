import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";

const MarketingAppComponent = lazy(() => import("./components/MarketingApp"));
const AuthAppComponent = lazy(() => import("./components/AuthApp"));

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthAppComponent} />
            <Route path="/" component={MarketingAppComponent} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
