const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devMode = (process.env.NODE_ENV !== "production");

module.exports = {
  entry: {
    bundle: "./src/index.js",
  }
  ,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [
                  require("autoprefixer")
                ]
              }
            }
          },
           "sass-loader"
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]"
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name][ext]"
        }
      },
      {
        test: /\.(wav|mp3)$/i,
        type: "asset/resource",
        generator: {
          filename: "include/[name][ext]"
        }
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};