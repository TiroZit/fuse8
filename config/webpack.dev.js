import fs from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader";

import * as path from "path";

const srcFolder = "src";
const assetsFolder = "assets";
const builFolder = "dist";
const rootFolder = path.basename(path.resolve());
const isDev = !process.argv.includes("--build");

let pugPages = fs
  .readdirSync(assetsFolder)
  .filter((fileName) => fileName.endsWith(".pug"));

const paths = {
  src: path.resolve(srcFolder),
  assets: path.resolve(assetsFolder),
  build: path.resolve(builFolder),
};
const config = {
  mode: "development",
  devtool: "inline-source-map",
  optimization: {
    minimize: false,
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
  entry: [`${paths.src}/main.js`],
  output: {
    path: `${paths.build}`,
    filename: "js/[name].min.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    open: false,
    compress: true,
    port: "auto",
    hot: true,
    host: "localhost", // localhost

    // Расскоментировать на слабом ПК
    // (в режиме разработчика, папка с результаттом будет создаваться на диске)
    devMiddleware: {
      writeToDisk: true,
    },

    watchFiles: [
      `${paths.assets}/**/*.pug`,
      `${paths.assets}/svg/*.svg`,
      `${paths.assets}/img/**/*.*`,
    ],
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
        exclude: `${paths.assets}/fonts`,
        use: [
          "vue-style-loader",
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
              sourceMap: true,
              importLoaders: 1,
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
              sourceMap: true,
              additionalData: `
                @use "sass:math";
                @import '${assetsFolder}/scss/base/variables.scss';
              `,
            },
          },
        ],
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
                  data: { isDev },
                  basedir: `${paths.assets}/pug`
                },
              },
            ],
          },
          // это применяется к импортам pug внутри JavaScript
          {
            use: [
              "raw-loader", 
              "pug-plain-loader",
              {
                loader: 'string-replace-loader',
                options: {
                  multiple: [
                    { search: "link(rel='stylesheet' href='css/style.min.css')", replace: " " },
                    { search: '../img', replace: 'img' },
                    { search: '@img', replace: 'img' }
                  ]
                }
              }
            ],
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
          template: `${assetsFolder}/${pugPage}`,
          filename: `${pugPage.replace(/\.pug/, ".html")}`,
          inject: false,
        })
    ),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: `${assetsFolder}/img`,
          to: `img`,
          noErrorOnMissing: true,
          force: true,
        },
        {
          from: `${srcFolder}/files`,
          to: `files`,
          noErrorOnMissing: true,
          force: true,
        },
        {
          from: `${paths.src}/favicon.ico`,
          to: `./`,
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
      "@pages": `${paths.src}/pages`,
      "@router": `${paths.src}/router`,
      "vue": "@vue/runtime-dom",
    },
    extensions: ['.vue', '.js', '.json']
  },
};
export default config;
