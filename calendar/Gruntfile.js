module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    wiredep: {
      task: {
        src: ['app/index.html'],
        options: {
          // directory: 'public/lib'
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/{,*/}*.css',
          '<%= yeoman.app %>/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Server settings
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect().use(
                '/public/lib',
                connect.static('./public/lib')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('serve', 'Start a connect web server', function (target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

};