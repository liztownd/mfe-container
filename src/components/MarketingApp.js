import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingAppComponent = () => {
  const ref = useRef(null);
  const history = useHistory();

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

  }, [history]);

  return <div ref={ref} />;
};

export default MarketingAppComponent;
