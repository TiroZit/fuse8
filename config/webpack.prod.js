import fs from 'fs';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from "terser-webpack-plugin";
import { VueLoaderPlugin } from 'vue-loader';

import * as path from 'path';

const srcFolder = "src";
const builFolder = "dist";
const rootFolder = path.basename(path.resolve());

let pugPages = fs.readdirSync(srcFolder).filter(fileName => fileName.endsWith('.pug'))
let htmlPages = [];

if (!pugPages.length) {
	htmlPages = [new FileIncludeWebpackPlugin({
		source: srcFolder,
		destination: '../',
		htmlBeautifyOptions: {
			"indent-with-tabs": true,
			'indent_size': 3
		},
		replace: [
			{ regex: '../img', to: 'img' },
			{ regex: '@img', to: 'img', },
			{ regex: 'NEW_PROJECT_NAME', to: rootFolder }
		],
	})]
}

const paths = {
	src: path.resolve(srcFolder),
	build: path.resolve(builFolder)
}
const config = {
	mode: "production",
	cache: {
		type: 'filesystem'
	},
	output: {
		path: `${paths.build}`,
		filename: '[name].min.js',
		publicPath: '',
	},
	optimization: {
		minimizer: [new TerserPlugin({
			extractComments: false,
		})],
		splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
	},
	module: {
		rules: [
			{
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
			{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
				test: /\.pug$/,
        oneOf: [
          // это применяется к `<template lang="pug">` в компонентах Vue
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          // это применяется к импортам pug внутри JavaScript
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
			},
      { 
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					},
					{
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: 'img',
							flags: 'g'
						}
					},
				]
			},
      {
				test: /\.(scss|css)$/,
				use: [
					'vue-style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'string-replace-loader',
						options: {
							search: '@img',
							replace: '../img',
							flags: 'g'
						}
					}, {
						loader: 'css-loader',
						options: {
							importLoaders: 0,
							sourceMap: false,
							modules: false,
							url: {
								filter: (url, resourcePath) => {
									if (url.includes("img") || url.includes("fonts")) {
										return false;
									}
									return true;
								},
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							additionalData: `
								@import '${srcFolder}/scss/base/variables.scss';
							`,
							sassOptions: {
								outputStyle: "expanded",
							},
						}
					},
				],
			},
		],
	},
	plugins: [
    ...htmlPages,
		...pugPages.map(pugPage => new HtmlWebpackPlugin({
      minify: false,
			template: `${srcFolder}/${pugPage}`,
			filename: `../${pugPage.replace(/\.pug/, '.html')}`,
			inject: true,
		})),
    new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
      filename: '../css/style.css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: `${paths.src}/files`, to: `../files`,
					noErrorOnMissing: true
				}, {
					from: `${paths.src}/favicon.ico`, to: `../`,
					noErrorOnMissing: true
				}
			],
		})
	],
	resolve: {
		alias: {
			"@scss": `${paths.src}/scss`,
			"@js": `${paths.src}/js`,
			"@img": `${paths.src}/img`,
			'vue': '@vue/runtime-dom'
		},
	},
}
export default config;