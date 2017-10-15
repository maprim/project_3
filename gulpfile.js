var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('less', function() {
  gulp.src('less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browser Sync
      server: { // Определяем параметры сервера
          baseDir: '' // Директория для сервера - app
      },
      notify: false // Отключаем уведомления
  });
});


gulp.task('watch', ['browser-sync', 'less'], function(){
  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});
