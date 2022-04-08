import squoosh from 'gulp-squoosh'
import path from 'path'

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isWebP,
				squoosh(({ filePath }) => ({
					encodeOptions: {
						webp: { quality: 80 },
						avif: { quality: 80 },
						...(path.extname(filePath) === '.png'
							? { oxipng: { level: 2 } }
							: { mozjpeg: { level: 2 } })
					}
				}))
			)
		)
		.pipe(
			app.plugins.if(
				app.isWebP,
				app.gulp.dest(app.path.build.images)
			)
		)
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images));
}
