module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    {
      plugin: require("./craco-plugins/module-federation"),
    },
  ],
};
