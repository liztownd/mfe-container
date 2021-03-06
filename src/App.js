import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  Router,
  Route,
  Switch,
  Redirect,
  
} from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const MarketingAppComponent = lazy(() => import("./components/MarketingApp"));
const AuthAppComponent = lazy(() => import("./components/AuthApp"));
const DashboardComponent = lazy(() => import("./components/DashboardApp"));

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  // const navigate = useNavigate();
  const history = createBrowserHistory();

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      // navigate("/dashboard");
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route
                path="/auth"
                >
                  <AuthAppComponent onSignIn={() => setIsSignedIn(true)} />
                  </Route>
              <Route path="/dashboard" exact>
                {!isSignedIn && <Redirect to="/" />}
                <DashboardComponent />
              </Route>
              <Route path="/" >
              <MarketingAppComponent />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
