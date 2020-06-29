const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./DogImage": "../components/DogImage",
      },
      shared: require("../package.json").dependencies,
    }),
  ],
};
