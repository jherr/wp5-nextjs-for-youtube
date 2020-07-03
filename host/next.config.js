module.exports = {
  webpack(config, options) {
    config.externals = {
      react: "React",
      "react-dom": "ReactDOM",
    };
    return config;
  },
};
