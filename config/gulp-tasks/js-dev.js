import webpack from "webpack-stream";
import webPackConfig from '../webpack.prod.js';
import TerserPlugin from "terser-webpack-plugin";
import * as path from 'path';

const srcFolder = "src";
const builFolder = "dist";

const paths = {
	src: path.resolve(srcFolder),
	build: path.resolve(builFolder)
}

let webPackConfigBeautify = Object.assign({}, webPackConfig);

webPackConfigBeautify.optimization = {
	minimizer: [new TerserPlugin({
		extractComments: false,
		terserOptions: {
			ecma: undefined,
			warnings: false,
			parse: {},
			compress: {
				defaults: false,
				unused: true,
			},
			mangle: false,
			module: false,
			toplevel: false,
			keep_classnames: true,
			keep_fnames: true,
			format: {
				indent_level: 2,
				beautify: true
			}
		}
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
}
webPackConfigBeautify.output = {
	path: `${paths.build}`,
	filename: '[name].js',
	publicPath: '/',
}

export const jsDev = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			config: webPackConfigBeautify
		}))
		.pipe(app.gulp.dest(app.path.build.js));
}
