import fs from 'fs';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
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
		htmlBeautifyOptions: {
			"indent-with-tabs": true,
			'indent_size': 2
		},
		replace: [
			{ regex: '<link rel="stylesheet" href="css/style.min.css">', to: '' },
			{ regex: '../img', to: 'img' },
			{ regex: '@img', to: 'img' },
			{ regex: 'NEW_PROJECT_NAME', to: rootFolder }
		],
	})];
}

const paths = {
	src: path.resolve(srcFolder),
	build: path.resolve(builFolder)
}
const config = {
	mode: "development",
	devtool: 'inline-source-map',
	optimization: {
		minimize: false,
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
	entry: [
		`${paths.src}/app.js`
	],
	output: {
		path: `${paths.build}`,
		filename: 'js/[name].min.js',
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true,
		static: paths.build,
		open: false,
		compress: true,
		port: 'auto',
		hot: true,
		host: 'localhost', // localhost

		// Расскоментировать на слабом ПК
		// (в режиме разработчика, папка с результаттом будет создаваться на диске)
		// devMiddleware: {
		// 	writeToDisk: true,
		// },

		watchFiles: [
			`${paths.src}/**/*.html`,
			`${paths.src}/**/*.pug`,
			`${paths.src}/**/*.htm`,
			`${paths.src}/img/**/*.*`
		],
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
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				exclude: `${paths.src}/fonts`,
				use: [
					'vue-style-loader',
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
							sourceMap: true,
							importLoaders: 1,
							modules: false,
							url: {
								filter: (url, resourcePath) => {
									if (url.includes("img/") || url.includes("fonts/")) {
										return false;
									}
									return true;
								},
							},
						},
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							additionalData: `
								@import '${srcFolder}/scss/base/variables.scss';
							`
						}
					}
				],
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
			}
		],
	},
	plugins: [
		...htmlPages,
		...pugPages.map(pugPage => new HtmlWebpackPlugin({
			minify: false,
			template: `${srcFolder}/${pugPage}`,
			filename: `${pugPage.replace(/\.pug/, '.html')}`
		})),
		new VueLoaderPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: `${srcFolder}/img`, to: `img`,
					noErrorOnMissing: true,
					force: true
				}, {
					from: `${srcFolder}/files`, to: `files`,
					noErrorOnMissing: true,
					force: true
				}, {
					from: `${paths.src}/favicon.ico`, to: `./`,
					noErrorOnMissing: true
				}
			],
		}),
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