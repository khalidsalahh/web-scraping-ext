const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.jsx"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
