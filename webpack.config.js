const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"], //.tsx якщо використовувати TypScript
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".ts",
      ".tsx",
      ".css",
      ".scss",
      ".html",
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/img"),
          to: path.resolve(__dirname, "build/img"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.json$/,
        use: "json-loader",
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
    ],
  },
};
