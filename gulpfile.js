const path = require('path')
const gulp = require('gulp')
const del = require('del')
const browserSync = require('browser-sync').create()
const compileDirectory = require('dovetailer')
const config = require('./config')

const clean = () => del([config.DIRS.BUILD, config.DIRS.CACHE])

const compile = async filePath => {
  const templatePath = filePath ? path.parse(filePath).dir : config.DIRS.EMAILS
  await compileDirectory(templatePath, {
    doctype: config.options.doctype
  })
}

const compileAll = () => compile()

const startServer = cb => {
  browserSync.init(
    {
      server: {
        baseDir: config.DIRS.BUILD,
        directory: true
      },
      ui: false
    },
    cb
  )
}

const watch = () => {
  gulp.watch(config.FILES.EMAILS).on('change', compile)
  gulp.watch([config.FILES.COMPONENTS, config.FILES.TEMPLATES], compileAll)
  gulp.watch(config.FILES.BUILD).on('change', browserSync.reload)
}

gulp.task('default', gulp.series(clean, compileAll, startServer, watch))
