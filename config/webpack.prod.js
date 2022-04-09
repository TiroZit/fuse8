import fs from "fs";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";

import * as path from "path";

const srcFolder = "src";
const assetsFolder = "assets";
const builFolder = "dist";
const rootFolder = path.basename(path.resolve());

let pugPages = fs
  .readdirSync(srcFolder)
  .filter((fileName) => fileName.endsWith(".pug"));

const paths = {
  src: path.resolve(srcFolder),
  assets: path.resolve(assetsFolder),
  build: path.resolve(builFolder),
};
const config = {
  mode: "production",
  cache: {
    type: "filesystem",
  },
  output: {
    path: `${paths.build}`,
    filename: "[name].min.js",
    publicPath: "",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.pug$/,
        oneOf: [
          // это применяется к `<template lang="pug">` в компонентах Vue
          {
            resourceQuery: /^\?vue/,
            use: [
              {
                loader: "pug-plain-loader",
                options: {
                  basedir: `${paths.src}/pug`
                }
              },
            ],
          },
          // это применяется к импортам pug внутри JavaScript
          {
            use: [
              "raw-loader", 
              "pug-plain-loader",
            ],
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "@img",
              replace: "img",
              flags: "g",
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "vue-style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "@img",
              replace: "../img",
              flags: "g",
            },
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 0,
              sourceMap: false,
              modules: false,
              url: {
                filter: (url, resourcePath) => {
                  if (url.includes(`img/`) || url.includes(`fonts/`)) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `
                @use "sass:math";
                @import '${assetsFolder}/scss/base/variables.scss';
              `,
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...pugPages.map(
      (pugPage) =>
        new HtmlWebpackPlugin({
          minify: false,
          template: `${srcFolder}/${pugPage}`,
          filename: `../${pugPage.replace(/\.pug/, ".html")}`,
          inject: false,
        })
    ),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "../css/style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${paths.src}/files`,
          to: `../files`,
          noErrorOnMissing: true,
        },
        {
          from: `${paths.src}/favicon.ico`,
          to: `../`,
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@scss": `${paths.assets}/scss`,
      "@js": `${paths.src}/js`,
      "@img": `${paths.assets}/img`,
      "@components": `${paths.src}/components`,
      "vue": "@vue/runtime-dom",
      "@dist": ".."
    },
    extensions: ['.vue', '.scss', '.js', '.json']
  },
};
export default config;
