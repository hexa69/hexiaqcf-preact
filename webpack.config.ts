import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[id].[contenthash].js",
    assetModuleFilename: "assets/[contenthash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: "babel-loader",
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(webp|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      react: "preact/compat",
      "react-dom/test-utils": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/compat",
    },
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  devServer: {
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      publicPath: "/",
    }),
  ],
};

export default config;
