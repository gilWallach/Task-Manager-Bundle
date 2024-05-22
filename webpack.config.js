const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve from 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 9000,     // Choose a port for the dev server
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
};
