import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthAppComponent = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
      const { onParentNavigate } =
    mount(ref.current, {
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

export default AuthAppComponent;