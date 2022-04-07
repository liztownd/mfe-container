const deps = require("./package.json").dependencies;

module.exports = {
  name: "container",
  remotes: {
    marketing: "marketing@http://localhost:8081/remoteEntry.js",
    auth: "auth@http://localhost:8082/remoteEntry.js",
    dashboard: "dashboard@http://localhost:8083/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
