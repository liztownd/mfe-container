import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { createBrowserHistory } from "history";

const MarketingAppComponent = () => {
  const ref = useRef(null);
  const history = createBrowserHistory();

  useEffect(() => {
      const { onParentNavigate } =
    mount(ref.current, {
      initialPath: history.location.pathname,
      // keep BrowserHistory in sync
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);

  }, []);

  return <div ref={ref} />;
};

export default MarketingAppComponent;
